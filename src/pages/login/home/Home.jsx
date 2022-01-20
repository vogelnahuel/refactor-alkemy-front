import React from "react";
import { Field, Form } from "react-final-form";
import { Link } from "react-router-dom";
import { Input } from "../../../components/input";
import useValidationSchema from "../../../hooks/useValidationSchema";
import "./Home.scss";

export const Home = ({ postLogin, validationSchema, isFetching }) => {
  return (
    <div className="background-login">
      <h1 className="login-title">Alkemy Labs</h1>
      <Form
        onSubmit={(values) => postLogin(values)}
        validate={useValidationSchema(validationSchema)}
      >
        {({ handleSubmit }) => (
          <form className="login-form" onSubmit={handleSubmit}>
            <Field
              type="text"
              name="email"
              id="usuario"
              label="Usuario"
              className="Admin-Pickers-input"
              component={Input}
              maxLength={50}
              animated
            />

            <Field
              id="password"
              type="password"
              name="password"
              label="Contraseña"
              className="Admin-Pickers-input"
              component={Input}
              maxLength={20}
              animated
            />

            <div className="container-animation">
              <button
                className={
                  isFetching ? "login-button shineBorder-login" : "login-button"
                }
                disabled={isFetching}
                type="submit"
                name="button"
              >
                <p className="login-init ">Iniciar sesión</p>
              </button>
            </div>
          </form>
        )}
      </Form>
      <div className="container-login-a">
          <Link className="login-a" to="/createUser">
            ¿No tenes usuario?
          </Link>
      </div>
    </div>
  );
};
