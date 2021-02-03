import React from "react";
import StudentIcon from "../../assets/image/student.svg";
import "./adminDashboardDetails.scss";

class AdminDashboardDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h4>DASHBOARD DETAILS</h4>
        <div className="outer-detail-container-admin">
          <div className="detail-card">
            <div className="top-half-details-box">
              <img src={StudentIcon} className="icon-width" /> 10
            </div>
            <div className="lower-half-details-box">
              Java Full Stack with Angular6
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AdminDashboardDetails;
