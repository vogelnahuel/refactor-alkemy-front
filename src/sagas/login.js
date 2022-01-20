import { call, put, takeLatest } from "redux-saga/effects";
import { actions, types } from "../reducers/login";
import * as loginMiddleware from "../middleware/login";
import { removeItem } from "../utils/localStorage";
import { replace } from "connected-react-router";
// import { replace } from "@lagunovsky/redux-react-router";

const sagas = [
  takeLatest(types.LOGIN_GET_REQUEST, getLogin),
  takeLatest(types.LOGOUT, logout),
  takeLatest(types.LOGIN_EMAIL_GET_REQUEST, getLoginEmail),
  takeLatest(types.LOGIN_RESTORE_GET_REQUEST, getLoginRestore),
];

export default sagas;

function* getLogin({ params, element }) {
  yield put(replace("/dashboard"));
  // const response = yield call(loginMiddleware.getLogin, params);

  // if (response.status !== 200) {
  //   yield put(actions.getLoginError());

  // } else {
  //   const { result } = response.data;
  //   yield call(loginMiddleware.setAuthToken, result.accessToken);
  //   saveValue("token", result.accessToken);
  //   yield put(replace( '/dashboard'));
  //   yield put(actions.getLoginSuccess());
  // }
}

function* logout() {
  removeItem("token");
  yield put(replace("/"));
}

function* getLoginEmail({ params, element }) {
  const response = yield call(loginMiddleware.getLoginEmail, params);

  if (response.status !== 200) {
    yield put(replace("/"));
    yield put(actions.getLoginEmailError());
  } else {
    yield put(replace("/"));
    yield put(actions.getLoginEmailSuccess());
  }
}

function* getLoginRestore({ params, element }) {
  const response = yield call(loginMiddleware.getLoginRestore, params);

  if (response.status !== 200) {
    yield put(actions.getLoginREstoreError());
  } else {
    yield put(replace("/"));
    yield put(actions.getLoginRestoreSuccess());
  }
}
