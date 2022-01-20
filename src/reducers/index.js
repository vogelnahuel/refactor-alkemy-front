import { combineReducers } from "redux";

import login from "./login";
import dashboard from "./dashboard";
import operations from "./operations";
import { connectRouter } from 'connected-react-router'


const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    login,
    dashboard,
    operations
});

export default rootReducer;