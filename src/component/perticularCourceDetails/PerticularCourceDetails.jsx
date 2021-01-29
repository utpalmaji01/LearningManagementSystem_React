import React, { useState, useEffect } from "react";
import { IconButton, Typography } from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";
import "./perticularCourceDetails.scss";
const PerticularCourceDetails = (props) => {
  const [cource, setCource] = useState({});

  useEffect(() => {
    setCource(props.perticularCource);
  }, [props.perticularCource]);

  return (
    <div className="perticular-cource">
      <div className="perticular-cource-header">
        <Typography
          variant="caption"
          color="textSecondary"
          onClick={props.showDashboard}
          className="go-to-dashboard"
        >
          DashBoard
        </Typography>
        <Typography variant="caption" color="textPrimary">
          / {props.perticularCource.courceName}
        </Typography>
      </div>
      <div className="perticular-cource-details">
        <div className="cource-mentors">
          <div className="cource-mentors-header">
            <Typography variant="body2" color="textSecondary">
              Mentors-{props.perticularCource.mentors.length}
            </Typography>
          </div>
          <div className="all-mentors">
            {props.perticularCource.mentors.map((eachMentor) => (
              <div key={eachMentor.mId} className="each-mentor">
                <div className="each-mentor-action-button">
                  <IconButton className="mentor-delete">
                    <DeleteIcon
                      fontSize="small"
                      color="disabled"
                      className="delete-icon"
                    />
                  </IconButton>
                </div>
                <div className="each-mentor-picture"></div>
                <div className="each-mentor-details">
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className="each-mentor-id"
                  >
                    {eachMentor.mId.substring(0, 5)}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textPrimary"
                    className="each-mentor-name"
                  >
                    {eachMentor.mName}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cource-students">
          <div className="cource-students-header">
            <Typography variant="body2" color="textSecondary">
              Students-{props.perticularCource.students.length}
            </Typography>
          </div>
          <div className="all-student">
            {props.perticularCource.students.map((eachStudent) => (
              <div key={eachStudent.sId} className="each-student">
                <div className="each-student-name">
                  <Typography variant="body1" color="textPrimary">
                    {eachStudent.sName}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerticularCourceDetails;
