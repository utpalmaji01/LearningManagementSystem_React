import React, { useEffect, useState, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "../appBar/Appbar.jsx";
import SidenavBar from "../sideNavBar/SidenavBar.jsx";
import Loader from "../lazyLoading/Loading.jsx";
import Mentor from "../mentor/Mentor.jsx";
import Student from "../student/Student.jsx";
import adminServices from '../../services/admin_service.js';
import Course from "../course/Course.jsx";
import "./dashboard.scss";
const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("DashBoard");
  const [allCource, setAllCource] = useState(null);

  useEffect(() => {
    adminServices.fetchAllCourse()
    .then((responce) => {
      console.log(responce);
      setAllCource(responce.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  const MainDashboard = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve(import("../mainDashboard/MainDashboard.jsx")),
        1000
      );
    });
  });
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
            <Route
              path="/dashboard/main"
              component={() => (
                <Suspense fallback={<Loader />}>
                  <MainDashboard allCource={allCource} />
                </Suspense>
              )}
            />
            <Route path="/dashboard/Mentor" component={() => <Mentor />} />
            <Route path="/dashboard/Student" component={() => <Student />} />
            <Route path="/dashboard/Course" component={() => <Course />} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
