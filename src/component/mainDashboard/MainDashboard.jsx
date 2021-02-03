import {
  Card,
  CardContent,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import React, { Component } from "react";
import { MoreVert as MoreVertIcon } from "@material-ui/icons";
import PerticularCourceDetails from "../perticularCourceDetails/PerticularCourceDetails.jsx";

import "./mainDashboard.scss";
class MainDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      showPerticularCourceDetails: false,
      perticularCource: null,
    };
  }


  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  showDashboard = () => {
    this.setState({
      showPerticularCourceDetails: false,
    });
  };

  showPerticularCource = (cource) => {
    console.log("hello");
    // this.setState({
    //   showPerticularCourceDetails: true,
    //   perticularCource: cource,
    // });
  };

  render() {
    return (
      <div className="main-dashboard-container">
        {this.state.showPerticularCourceDetails ? (
          <>
            {this.state.perticularCource !== null &&
              this.state.perticularCource !== undefined && (
                <PerticularCourceDetails
                  perticularCource={this.state.perticularCource}
                  showDashboard={this.showDashboard}
                />
              )}
          </>
        ) : (
          <>
            <Typography
              variant="body1"
              className="main-dashboard-container-header"
            >
              DASHBOARD DETAILS
            </Typography>
            <div className="all-cource-details">
              {this.props.allCource.map((eachCource) => (
                <Card
                  key={eachCource.courceID}
                  // onClick={() => this.showPerticularCource(eachData)}
                  className="each-cource"
                >
                  <CardContent className="each-cource-contant">
                    <div className="cource-title-action">
                      <Typography
                        variant="body2"
                        className="cource-title"
                        onClick={() => this.showPerticularCource(eachCource)}
                      >
                        {eachCource.courceName}
                      </Typography>
                      <IconButton
                        aria-controls="cource-menu"
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        className="cource-action-button"
                      >
                        <MoreVertIcon fontSize="small" />
                      </IconButton>
                      <Menu
                        id="cource-menu"
                        elevation={0}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleClose}
                      >
                        <MenuItem dense onClick={this.handleClose}>
                          Edit
                        </MenuItem>
                        <MenuItem dense onClick={this.handleClose}>
                          Delete
                        </MenuItem>
                      </Menu>
                    </div>
                    <div
                      className="cource-student-mentor"
                      onClick={() => this.showPerticularCource(eachCource)}
                    >
                      <div className="cource-student">
                        <Typography variant="body1">
                          {eachCource.studentsID.length}
                        </Typography>
                        <Typography variant="caption">Student</Typography>
                      </div>
                      <div className="cource-mentor">
                        <Typography variant="body1">
                          {eachCource.mentorsID.length}
                        </Typography>
                        <Typography variant="caption">Mentors</Typography>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default MainDashboard;
