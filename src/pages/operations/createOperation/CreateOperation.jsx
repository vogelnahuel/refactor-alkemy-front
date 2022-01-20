import React from 'react'
import { Field, Form } from "react-final-form";
import { Input } from "../../../components/input";
import useValidationSchema from "../../../hooks/useValidationSchema";
import { Nav } from '../../../components/nav/Nav'
import './createOperations.scss'


export const CreateOperation = ({ validationSchema,createOperation }) => {
    return (
        <div className='display-flex'>
            <Nav />
            <div className='pending-container'>
                <h1>Formulario de creacion de operaciones</h1>
                <div className='display-filter-transaction display-flex operations-margin-bottom'>
                    <Form
                        onSubmit={(values) => createOperation(values)}
                        validate={useValidationSchema(validationSchema)}
                    >
                        {({ handleSubmit }) => (

                            <form className="form-create-operations" onSubmit={handleSubmit}>
                                <div className='container-input-filter'>
                                    <Field
                                        type="text"
                                        name="description"
                                        id="concepto"
                                        label="concepto"
                                        placeholder="descripcion de la operacion"
                                        className="Admin-Pickers-input"
                                        component={Input}
                                        maxLength={50}
                                    />
                                </div>
                                <div className='container-input-filter'>
                                    <Field
                                        type="text"
                                        name="amount"
                                        id="monto"
                                        label="monto"
                                        placeholder="1000/ect"
                                        className="Admin-Pickers-input"
                                        component={Input}
                                        maxLength={50}
                                    />
                                </div>

                                <div className='container-input-filter'>
                                    <Field
                                        type="text"
                                        name="date"
                                        placeholder="01/01/2222"
                                        id="fecha"
                                        label="fecha"
                                        className="Admin-Pickers-input"
                                        component={Input}
                                        maxLength={50}
                                    />
                                </div>

                                <div className='container-input-filter'>
                                    <Field
                                        type="text"
                                        name="incomeType"
                                        id="tipo"
                                        placeholder="ingreso/egreso"
                                        label="tipo"
                                        className="Admin-Pickers-input"
                                        component={Input}
                                        maxLength={50}
                                    />
                                </div>
                                <div className='container-input-filter'>
                                    <Field
                                        type="text"
                                        name="category"
                                        placeholder="comida/servicios/ect"
                                        id="categoria"
                                        label="categoria"
                                        className="Admin-Pickers-input"
                                        component={Input}
                                        maxLength={50}
                                    />
                                </div>


                                <button className='operations-search-button'><p>Crear</p></button>
                            </form>
                        )}
                    </Form>

                </div>
            </div>
        </div>
    )
}
