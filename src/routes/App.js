import React from "react";
import {Route, Switch} from 'react-router'; 
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import HomeContainer from "../pages/login/home/HomeContainer";
import DashboardContainer from "../pages/dashboard/DashboardContainer";
import OperationsContainer from "../pages/operations/OperationsContainer";
import DetailOperationsContainer from "../pages/operations/detailOperation/DetailOperationsContainer";
import CreateOperations from "../pages/operations/createOperation/CreateOperationContainer";
import store, {history} from '../store'
export const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
            <Route path="/createOperations" component={CreateOperations} />
            <Route
              path="/operations/:id"
              component={DetailOperationsContainer}
            />
            <Route path="/operations" component={OperationsContainer} />
            <Route path="/dashboard" component={DashboardContainer} />
            <Route exact path="/" component={HomeContainer} />
            <Route exact  path="/refactor-alkemy-front" component={HomeContainer} />

        </Switch>{" "}
      </ConnectedRouter>
    </Provider>
  );
};
export default App