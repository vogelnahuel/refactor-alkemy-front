import React, { useEffect } from "react";
import { DetailOperations } from "./DetailOperations";
import * as yup from "yup";
// import { VALIDATION_REGEX } from "../../../utils/constants";
import {
  actions as operationsActions,
  selectors as operationsSelectors,
} from "../../../reducers/operations";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const DetailOperationsContainer = (props) => {

  const {id} = useParams();


  useEffect(() => {
    props.getOperationByID(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const validationSchema = yup.object({
    description: yup.string().required("Este campo es requerido"),
    amount: yup.string().required("Este campo es requerido"),
    date: yup.string().required("Este campo es requerido"),
    incomeType: yup.string().required("Este campo es requerido"),
    category: yup.string().required("Este campo es requerido"),
  });

  return <DetailOperations {...props} validationSchema={validationSchema} id={id} />;
};

const mapStateToProps = (state) => ({
  isFetching: operationsSelectors.isFetching(state),
  operationSelected: operationsSelectors.getOperation(state)
});

const mapDispatchToProps = (dispatch) => ({
  getOperationByID: (id) => {
    dispatch(operationsActions.getOperationsByIDRequest(id))
  },
  OperationUpdate: (id,params) => {
    dispatch(operationsActions.getOperationsUpdateRequest(id,params))
  },
  OperationDelete: (id) => {
    dispatch(operationsActions.getOperationsDeleteRequest(id))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailOperationsContainer);
