import { call, put, takeLatest } from "redux-saga/effects";
import { actions, types } from "../reducers/operations";
import * as operationsMiddleware from "../middleware/operations";
import { replace } from "connected-react-router";
// import { replace } from "@lagunovsky/redux-react-router";

const sagas = [
  takeLatest(types.OPERATIONS_GET_REQUEST, getOperations),
  takeLatest(types.OPERATIONS_BY_ID_GET_REQUEST, getOperationsByID),
  takeLatest(types.OPERATION_UPDATE_REQUEST, updateOperation),
  takeLatest(types.OPERATION_DELETE_REQUEST, deleteOperation),
  takeLatest(types.OPERATION_POST_REQUEST, createOperation),
];

export default sagas;

function* getOperations({ params }) {
  const response = yield call(operationsMiddleware.getOperations, params);

  if (response.status !== 200) {
    yield put(actions.getOperationsError());
  } else {
    yield put(actions.getOperationsSuccess(response.data));
  }
}

function* getOperationsByID({ id }) {
  const response = yield call(operationsMiddleware.getOperationsByID, id);

  if (response.status !== 200) {
    yield put(actions.getOperationsByIDError());
  } else {
    yield put(actions.getOperationsByIDSuccess(response.data));
  }
}

function* updateOperation({ id, params }) {
  const response = yield call(operationsMiddleware.updateOperation, id, params);

  if (response.status !== 200) {
    yield put(actions.getOperationsUpdateError());
  } else {

    yield put(actions.getOperationsUpdateSuccess());
    yield put(replace("/operations"));
  }
}

function* deleteOperation({ id }) {
  const response = yield call(operationsMiddleware.deleteOperation, id);

  if (response.status !== 200) {
    yield put(actions.getOperationsDeleteError());
  } else {
  
    yield put(actions.getOperationsDeleteSuccess());
    yield put(replace("/operations"));
  }
}

function* createOperation({ params }) {
  params.amount = parseInt(params.amount)
  const response = yield call(operationsMiddleware.createOperation, params);

  if (response.status !== 200) {
    yield put(actions.getOperationsCreateError());
  } else {
 
    yield put(actions.getOperationsCreateSuccess());
    yield put(replace("/operations"));
  }
}
