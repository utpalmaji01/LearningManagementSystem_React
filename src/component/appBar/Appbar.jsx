import React, { Component } from "react";
import lms from "../../assets/image/lms.png";
import { PersonOutlineOutlined as PersonOutlineOutlinedIcon } from "@material-ui/icons";
import "./appbar.scss";
import { IconButton } from "@material-ui/core";

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isProfileClicked: false };
  }
  render() {
    return (
      <>
        <div className="appbar-container">
          <div className="app-picture">
            <img src={lms} alt="lms-logo" className="lms-logo" />
          </div>
          <div className="app-prifile-button">
            <div className="appbar-action-button">
              <IconButton className="profile-icon-button">
                <PersonOutlineOutlinedIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AppBar;
