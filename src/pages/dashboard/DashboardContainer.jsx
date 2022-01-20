import React, { useEffect } from 'react'
import { Dashboard } from './Dashboard';
import * as yup from "yup";

import {
    actions as dashboardActions,
    selectors as dashboardSelector,
  } from "../../reducers/dashboard";
  import { connect } from "react-redux";


const DashboardContainer = (props) => {

  useEffect(() => {
    props.getDashboard()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
    const validationSchema = yup.object();

    return <Dashboard {...props} validationSchema={validationSchema} />;
};

const mapStateToProps = (state) => ({
    isFetching: dashboardSelector.isFetching(state),
    dashboard:dashboardSelector.getDashboard(state),
    amountTotal:dashboardSelector.getAmountTotal(state),
  });
  
  const mapDispatchToProps = (dispatch) => ({
    getDashboard: (params) => {
      dispatch(dashboardActions.getDashboardRequest(params));
    },
  });
  

  export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);