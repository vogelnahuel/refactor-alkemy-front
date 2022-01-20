import React from "react";
import { CreateOperation } from "./CreateOperation";
import * as yup from "yup";
import { VALIDATION_REGEX } from "../../../utils/constants";
import {
  actions as operationsActions,
  selectors as operationsSelectors,
} from "../../../reducers/operations";
import { connect } from "react-redux";

const CreateOperationContainer = (props) => {
  const validationSchema = yup.object({
    description: yup.string().required("Este campo es requerido"),
    amount: yup.string().required("Este campo es requerido").matches(VALIDATION_REGEX.regNumber,"solo se admiten numeros"),
    date: yup.string().required("Este campo es requerido"),
    incomeType: yup.string().required("Este campo es requerido"),
    category: yup.string().required("Este campo es requerido"),
  });

  return <CreateOperation {...props} validationSchema={validationSchema} />;
};

const mapStateToProps = (state) => ({
  isFetching: operationsSelectors.isFetching(state),
});

const mapDispatchToProps = (dispatch) => ({
  createOperation: (params) => {
    dispatch(operationsActions.getOperationsCreateRequest(params));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateOperationContainer);
