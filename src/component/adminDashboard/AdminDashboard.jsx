import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "../appBar/Appbar.jsx";
import UserProfile from "../userProfile/userProfile.jsx";
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
              component={() => <UserProfile /> }
            />
          </Switch>
          
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
