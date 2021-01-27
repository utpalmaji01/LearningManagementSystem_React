import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "../appBar/Appbar.jsx";
import SidenavBar from "../sideNavBar/SidenavBar.jsx";
import MainDashboard from "../mainDashboard/MainDashboard.jsx";
import Mentor from "../mentor/Mentor.jsx";
import "./dashboard.scss";
const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("DashBoard");
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <AppBar />
      </div>
      <div className="dashboard-body">
        <div className="dashboard-side-navbar">
          <SidenavBar
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
          />
        </div>
        <div className="dashboard-details">
          <Switch>
            <Route path="/dashboard/main" component={() => <MainDashboard />} />
            <Route path="/dashboard/Mentor" component={() => <Mentor />} />
            <Route path="/dashboard/Student" component={() => <Mentor />} />
            <Route path="/dashboard/Course" component={() => <Mentor />} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
