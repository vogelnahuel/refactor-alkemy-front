import {all, call, spawn} from "redux-saga/effects";
import login from "./login";
import dashboard from "./dashboard";
import operations from "./operations";



const sagas = [
     ...login,
     ...dashboard,
     ...operations
];
//revisar el any del err

export default function* rootSaga() {
    yield all(
        sagas.map((saga) =>
            spawn(function* listenErrors() {
                let isSyncError = false;
                const resetSyncError = () => {
                    isSyncError = false;
                };
                let httpError = false;
                while (true) {
                    httpError = false;
                    isSyncError = true;
                    try {
                        setTimeout(resetSyncError);

                        yield call(function* execSaga() {
                            yield saga;
                        });
                        console.error(
                            "Unexpected root saga termination. " +
                                "The root sagas are supposed to be sagas that live during the whole app lifetime!",
                            saga,
                        );
                    } catch (error) {
                        httpError = typeof error.httpError !== "undefined";
                        if (!httpError && isSyncError) {
                            throw new Error(`${saga.name} was terminated because it threw an exception on startup.`);
                        }
                        // yield call(handleError, error);
                    }

                    if (!httpError) {
                        // Para evitar que fallas infinitas bloqueen el browser...
                        // eslint-disable-next-line no-console
                        console.error(saga.name, " will be restarted after 1 second");
                    }
                }
            }),
        ),
    );
}


// export function* handleError(error) {
//     const { status } = error.response;
//     if (status === 401) {
//         yield put(actions.logout())
//     }
// }