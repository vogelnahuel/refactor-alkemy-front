import React from 'react'
import { Field, Form } from "react-final-form";
import { Input } from "../../../components/input";
import useValidationSchema from "../../../hooks/useValidationSchema";
import './filterOperations.scss'
import filter from '../../../assets/filter.svg'
export const Filter = ({ isFetching, validationSchema }) => {
    return (
        <div className='display-filter-transaction display-flex operations-margin-bottom'>
            <div className='display-flex-operations'>
                <img className='operations-filter-img' src={filter} alt='filter' />
                <p className='operations-filter-filter'>Filtros</p>
            </div>


                <Form
                    onSubmit={(values) => console.log(values)}
                    validate={useValidationSchema(validationSchema)}
                >
                    {({ handleSubmit }) => (

                        <form className="form-operations" onSubmit={handleSubmit}>
                            <div className='container-input-filter'>
                                <Field
                                    type="text"
                                    name="concepto"
                                    id="concepto"
                                    label="concepto"
                                    className="Admin-Pickers-input"
                                    component={Input}
                                    maxLength={50}
                                />
                            </div>
                            <div className='container-input-filter'>
                                <Field
                                    type="text"
                                    name="tipo"
                                    id="tipo"
                                    label="tipo"
                                    className="Admin-Pickers-input"
                                    component={Input}
                                    maxLength={50}
                                />
                            </div>
                            <div className='container-input-filter'>
                                <Field
                                    type="text"
                                    name="categoria"
                                    id="categoria"
                                    label="categoria"
                                    className="Admin-Pickers-input"
                                    component={Input}
                                    maxLength={50}
                                />
                            </div>

                            <button className='operations-search-button'><p>Buscar</p></button>


                        </form>
                    )}
                </Form>

        </div>
    )
}

