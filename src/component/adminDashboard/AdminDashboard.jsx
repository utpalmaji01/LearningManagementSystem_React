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
          <Switch>
            <Route
              path="/userdashboard/details"
              component={() => <AdminDetails />}
            />
            <Route
              path="/userdashboard/profile"
              component={() =><div><h1>user profile</h1></div> }
            />
          </Switch>
          {/* <AdminDetails /> */}
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
