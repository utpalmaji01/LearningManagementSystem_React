import React, { useState, useEffect } from "react";
import { IconButton, Typography } from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";
import adminServices from "../../services/admin_service.js";
import Loader from "../lazyLoading/Loading.jsx";
import personImg from "../../assets/image/personImg.png";
import axiosServices from "../../services/axios_service.js"
import "./perticularCourceDetails.scss";

const PerticularCourceDetails = (props) => {
  const [courceMentors, setCourceMentors] = useState(null);
  const [courceStudents, setCourceStudents] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    adminServices
      .fetchAllStudents()
      .then((responce) => {
        console.log(responce);
        setCourceStudents(
          responce.data.filter((eachStudent) =>
            eachStudent.assignCourcesId.includes(
              props.perticularCource.courceID
            )
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
      axiosServices
          .getServices("http://localhost:3000/mentors")
        .then((responce) => {
          setCourceMentors(
            responce.data.filter((eachMentor) =>
              eachMentor.ableCource.includes(props.perticularCource.courceID)
            )
          );
          setLoaded(true);
        })
        .catch((error) => {
          console.log(error);
        });
    // adminServices
    //   .fetchAllMentors()
    //   .then((responce) => {
    //     console.log(responce);
    //     setCourceMentors(
    //       responce.data.filter((eachMentor) =>
    //         eachMentor.ableCource.includes(props.perticularCource.courceID)
    //       )
    //     );
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [props.perticularCource]);

  if (
    courceMentors !== undefined &&
    courceMentors !== null &&
    courceStudents !== undefined &&
    courceStudents !== null
  ) {
    setLoaded(true);
  }

  if (loaded) {
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
                "Mentors-{courceMentors.length}
              </Typography>
            </div>
            <div className="all-mentors">
              {courceMentors.map((eachMentor) => (
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
                  <div className="each-mentor-picture">
                    <img
                      src={personImg}
                      alt="mentor"
                      className="each-mentor-img"
                    />
                  </div>
                  <div className="each-mentor-details">
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      className="each-mentor-id"
                    >
                      {eachMentor.mId}
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
                Students-{courceStudents.length}
              </Typography>
            </div>
            <div className="all-student">
              {courceStudents.map((eachStudent) => (
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
  } else {
    return <Loader />;
  }
};

export default PerticularCourceDetails;
