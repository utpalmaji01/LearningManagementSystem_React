import React, { Component } from "react";
import lms from "../../assets/image/lms.png";
import { PersonOutlineOutlined as PersonOutlineOutlinedIcon } from "@material-ui/icons";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@material-ui/core";
import vsCodeLogo from "../../assets/image/vsCodeLogo.png";
import history from "../../History.js";
import "./appbar.scss";

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isProfileClicked: false };
  }

  showProfile = () => {
    console.log("hello");
    this.setState({ isProfileClicked: !this.state.isProfileClicked });
  };

  logout = () => {
    localStorage.setItem("adminId", "");
    this.setState({ isProfileClicked: !this.state.isProfileClicked });
    history.push("/logIn");
  };
  render() {
    return (
      <>
        <div className="appbar-container">
          <div className="app-picture">
            <img src={lms} alt="lms-logo" className="lms-logo" />
          </div>
          <div className="app-prifile-button">
            <div className="appbar-action-button">
              <IconButton
                onClick={() => this.showProfile()}
                className="profile-icon-button"
              >
                <PersonOutlineOutlinedIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
        </div>
        {this.state.isProfileClicked && (
          <Card className="profile-card">
            <CardContent className="profile-contant">
              <div className="person-picture">
                <img src={vsCodeLogo} alt="person" className="person-image" />
              </div>
              <div className="profile-contant-details">
                <Typography variant="h6" className="person-name">
                  Person Name
                </Typography>
                <Typography variant="body2" className="person-email">
                  Person email
                </Typography>
              </div>
            </CardContent>
            <Divider className="profile-card-divider" />
            <CardActions className="profile-card-actions">
              <Button
                fullWidth
                onClick={() => this.logout()}
                className="logout"
              >
                Log Out
              </Button>
            </CardActions>
          </Card>
        )}
      </>
    );
  }
}

export default AppBar;
