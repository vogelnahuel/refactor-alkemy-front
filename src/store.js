import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import reducer from "./reducers/index";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
export const history = createBrowserHistory();






const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store =
  process.env.NODE_ENV === "production"
    ? createStore(
        reducer(history),
        applyMiddleware(routerMiddleware(history), sagaMiddleware)
      )
    : createStore(
        reducer(history),
        composeEnhancers(
          applyMiddleware(routerMiddleware(history), sagaMiddleware)
        )
      );

sagaMiddleware.run(rootSaga);


export default store;