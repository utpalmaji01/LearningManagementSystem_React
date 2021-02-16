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
import personImg from "../../assets/image/personImg.png";
import { Menu as MenuIcon } from "@material-ui/icons";
import history from "../../History.js";
import "./appbar.scss";

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isProfileClicked: false };
  }

  showProfile = () => {
    this.setState({ isProfileClicked: !this.state.isProfileClicked });
  };

  logout = () => {
    localStorage.setItem("adminId", "");
    this.setState({ isProfileClicked: !this.state.isProfileClicked });
    history.push("/logIn");
  };

  toggleNavBar = () => {
    console.log("toggleNavBar reached" + window.screen.availWidth);
    this.props.setSideNavOpen(!this.props.sideNavOpen);
    // if (window?.screen.availWidth > 600) {
    //   this.props.setSideNavOpen(!this.props.sideNavOpen);
    // }
  };
  render() {
    return (
      <>
        <div className="appbar-container">
          <div className="app-picture">
            <IconButton
              className="navBar-toggle-button"
              onClick={() => this.toggleNavBar()}
              data-testid="navBarToggleButton"
            >
              <MenuIcon fontSize="small" />
            </IconButton>
            <img
              src={lms}
              alt="lms-logo"
              className="lms-logo"
              data-testid="lmsLogo"
            />
          </div>
          <div className="app-prifile-button">
            <div className="appbar-action-button">
              <IconButton
                onClick={() => this.showProfile()}
                className="profile-icon-button"
                data-testid="showProfile"
              >
                <PersonOutlineOutlinedIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
        </div>
        {this.state.isProfileClicked && (
          <Card className="profile-card" data-testid="profileCard"> 
            <CardContent className="profile-contant">
              <div className="person-picture">
                <img src={personImg} alt="person" className="person-image" />
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
