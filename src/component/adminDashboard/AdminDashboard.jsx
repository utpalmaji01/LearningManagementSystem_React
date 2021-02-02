import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "../appBar/Appbar.jsx";
import AdminDetails from "../adminDashboardDetails/AdminDashboardDetails.jsx";
import "./adminDashboard.scss";
const Dashboard = () => {
  return (
    <div className="dashboard-container-admin">
      <div className="dashboard-header-admin">
        <AppBar />
      </div>
      <div className="dashboard-body-admin">
        <div className="dashboard-details-admin">
          {/* <Switch>
            <Route
              path="/dashboard/details"
              component={() => <AdminDetails />}
            />
          </Switch> */}
          <AdminDetails />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
