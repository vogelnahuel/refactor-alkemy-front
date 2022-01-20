import React from "react";
import { TitleDashboard } from "../../../utils/constants";
import edit from "../../../assets/edit.svg";

import {useHistory} from "react-router-dom";
const TableOperations = ({ Operations }) => {
  const navigate = useHistory();

  return (
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
                onClick={() => navigate.push(`operations/${element._id}`)}
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
  );
};
export default TableOperations;
