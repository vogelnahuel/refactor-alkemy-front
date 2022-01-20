import React from 'react'
import { Filter } from './filter';
import * as yup from "yup";
import { VALIDATION_REGEX } from "../../../utils/constants";
import {
    actions as loginActions,
    selectors as loginSelectors,
  } from "../../../reducers/login";
  import { connect } from "react-redux";




const FilterContainer = (props) => {
    const validationSchema = yup.object({
        email: yup
            .string()
            .required("Este campo es requerido")
            .matches(VALIDATION_REGEX.regEmail, "El correo ingresado es inválido"),
        password: yup.string().required("Este campo es requerido"),
    });

    return <Filter {...props} validationSchema={validationSchema} />;
};

const mapStateToProps = (state) => ({
    isFetching: loginSelectors.isFetching(state),
  });
  
  const mapDispatchToProps = (dispatch) => ({
    postLogin: (params) => {
      dispatch(loginActions.getLoginRequest(params));
    },
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);


