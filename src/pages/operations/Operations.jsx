import React from "react";
import { Nav } from "../../components/nav/Nav";
import FilterContainer from "./filter/FilterContainer.jsx";


import { Link } from "react-router-dom";
import "./operations.scss";
import TableOperations from "./table/TableOperations";

export const Operations = ({ Operations, isFetching,getMoreOperations,filters }) => {

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
        <TableOperations filters={filters} Operations={Operations} getMoreOperations={getMoreOperations}/>
        
       
     
      </div>
      {isFetching === true ? <div className="modalLoading"></div> : <></>}
    </div>
  );
};
