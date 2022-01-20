import React from "react";
import { Field, Form } from "react-final-form";
import { Input } from "../../../components/input";
import useValidationSchema from "../../../hooks/useValidationSchema";
import { Nav } from "../../../components/nav/Nav";
import "./detailOperations.scss";
export const DetailOperations = ({
  validationSchema,
  operationSelected,
  isFetching,
  OperationUpdate,
  OperationDelete,
  id,
}) => {

   

  return (
    <div className="display-flex">
      <Nav />
      <div className="pending-container">
        <h1>Detalle de una operacion Editar / eliminar</h1>
        <div className=" display-flex ">
          <Form
            initialValues={operationSelected}
            onSubmit={(values) => OperationUpdate(id,values)}
            validate={useValidationSchema(validationSchema)}
          >
            {({ handleSubmit }) => (
              <form className="" onSubmit={handleSubmit}>
                <div className="form-create-operations display-filter-transaction">
                  <div className="container-input-filter">
                    <Field
                      type="text"
                      name="description"
                      id="concepto"
                      label="concepto"
                      className="Admin-Pickers-input"
                      component={Input}
                      maxLength={100}
                    />
                  </div>
                  <div className="container-input-filter">
                    <Field
                      type="text"
                      name="amount"
                      id="monto"
                      label="monto"
                      className="Admin-Pickers-input"
                      component={Input}
                      maxLength={12}
                    />
                  </div>

                  <div className="container-input-filter">
                    <Field
                      type="text"
                      name="date"
                      id="fecha"
                      label="fecha"
                      className="Admin-Pickers-input"
                      component={Input}
                      maxLength={10}
                    />
                  </div>

                  <div className="container-input-filter">
                    <Field
                      type="text"
                      name="incomeType"
                      id="tipo"
                      label="tipo"
                      disabled={true}
                      className="Admin-Pickers-input readonly"
                      component={Input}
                      maxLength={8}
                    />
                  </div>
                  <div className="container-input-filter">
                    <Field
                      type="text"
                      name="category"
                      id="categoria"
                      label="categoria"
                      className="Admin-Pickers-input"
                      component={Input}
                      maxLength={50}
                    />
                  </div>
                </div>
                <div className="container-buttons-operations">

                  <button
                    className="operations-search-button margin-top"
                    id="actualizar"
                  >
                    <p>Actualizar</p>
                  </button>
                  <button
                    className="operations-search-button margin-top"
                    id="eliminar"
                    type="button"
                    onClick={()=>OperationDelete(id)}
                  >
                    <p>Eliminar</p>
                  </button>
                </div>
              </form>
            )}
          </Form>
        </div>
      </div>
      {isFetching === true ? <div className="modalLoading"></div> : <></>}
    </div>
  );
};
