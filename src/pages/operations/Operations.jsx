import React from "react";
import { Nav } from "../../components/nav/Nav";
import FilterContainer from "./filter/FilterContainer.jsx";
import { TitleDashboard } from "../../utils/constants";
import edit from "../../assets/edit.svg";

import { Link ,useHistory} from "react-router-dom";
import "./operations.scss";

export const Operations = ({ Operations, isFetching }) => {
  const navigate = useHistory();
  
  return (
    <div className="display-flex">
      <Nav />
      <div className="pending-container">
        <div className="display-flex-operations-subtitle">
          <h1>Operaciones</h1>
          <Link className="operations-link" to="/createOperations">
            Crear Operacion
          </Link>
        </div>
        <FilterContainer />
        <table className="table-admin">
          <thead>
            <tr>
              {TitleDashboard.map((element) => (
                <th key={element}>{element}</th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Operations ? (
              Operations.map((element) => (
                <tr key={element._id}>
                  <td>{element.description} </td>
                  <td>{element.amount} </td>
                  <td>{element.date} </td>
                  <td>{element.incomeType} </td>
                  <td>{element.category} </td>
                  <td>
                    {" "}
                    <img
                      src={edit}
                      alt="edit"
                      className="table-operations-img"
                      onClick={() => navigate(`${element._id}`)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="no-result" colSpan={5}>
                  No obtuvimos resultados :(
                </td>
              </tr>
            )}
          </tbody>
        </table>
     
      </div>
      {isFetching === true ? <div className="modalLoading"></div> : <></>}
    </div>
  );
};
