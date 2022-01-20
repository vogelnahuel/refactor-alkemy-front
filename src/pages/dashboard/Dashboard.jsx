import React from "react";
import { Nav } from "../../components/nav/Nav";
import { TableDashboard } from "./table/TableDashboard";
import "./dashboard.scss";

export const Dashboard = ({ isFetching, dashboard, amountTotal }) => {
  return (
    <div className="display-flex-container-dashboard">
      <Nav />
      <div className="pending-container">
        <div className="form-fiter">
          <h1>
            Tu saldo es : <p className={amountTotal > 0  ? "amountTotalPositive":"amountTotalNegative"}>$ {amountTotal} </p>
          </h1>
        </div>
        <h1>Ultimos 10</h1>
        <TableDashboard dashboard={dashboard} />
      </div>
      {isFetching === true ? <div className="modalLoading"></div> : <></>}
    </div>
  );
};
