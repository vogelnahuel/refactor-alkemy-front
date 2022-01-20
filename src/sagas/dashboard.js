import { call, put, takeLatest } from "redux-saga/effects";
import { actions, types } from "../reducers/dashboard";
import * as dashboardMiddleware from "../middleware/dashboard";

const sagas = [takeLatest(types.DASHBOARD_GET_REQUEST, getDashboard)];

export default sagas;

function* getDashboard({ params }) {
  const response = yield call(dashboardMiddleware.getDashboard, params);

  if (response.status !== 200) {
    yield put(actions.getDashboardError());
  } else {
    yield put(
      actions.getDashboardSuccess({
        amount: response.data.amountResult,
        dashboard: response.data.operationsDashboard,
      })
    );
  }
}
