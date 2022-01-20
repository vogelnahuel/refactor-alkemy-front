import React, { useEffect } from "react";
import { Operations } from "./Operations";
import {
  actions as operationsActions,
  selectors as operationsSelectors,
} from "../../reducers/operations";
import { connect } from "react-redux";

const OperationsContainer = (props) => {
  useEffect(() => {
    props.getOperations(props.filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Operations {...props} />;
};

const mapStateToProps = (state) => ({
  isFetching: operationsSelectors.isFetching(state),
  Operations: operationsSelectors.getOperations(state),
  filters: operationsSelectors.getFilters(state),
});

const mapDispatchToProps = (dispatch) => ({
  getOperations: (params) => {
    dispatch(operationsActions.getOperationsRequest(params));
  },
  getMoreOperations:(params)=>{
    dispatch(operationsActions.getMoreOperationsRequest(params))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OperationsContainer);
