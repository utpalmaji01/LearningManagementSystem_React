import React, { Component } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Laptop as LaptopIcon, School as SchoolIcon } from "@material-ui/icons";
import mentor_icon from "../../assets/icon/Mentor.png";
import cource_icon from "../../assets/icon/Course.png";
import clsx from "clsx";
import history from "../../History.js";
import "./sideNavBar.scss";
class SidenavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  navigate = (e, menu) => {
    this.props.setSelectedMenu(menu);
    if (menu !== "DashBoard") {
      history.push("/dashboard/" + menu);
    } else {
      history.push("/dashboard/main");
    }
  };
  render() {
    return (
      <div className="sideNavBar-container">
        <List component="nav" className="sideNavBar-list">
          <ListItem
            button
            onClick={(e) => this.navigate(e, "DashBoard")}
            className={clsx("sideNav-list-item", {
              "sideNav-list-item-active":
                this.props.selectedMenu === "DashBoard",
            })}
          >
            <ListItemIcon
              className={clsx("list-item-icon", {
                "list-item-icon-active":
                  this.props.selectedMenu === "DashBoard",
              })}
            >
              <LaptopIcon className="list-icon" />
            </ListItemIcon>
            <ListItemText primary="DashBoard" className="list-item-text" />
          </ListItem>
          <ListItem
            button
            onClick={(e) => this.navigate(e, "Mentor")}
            className={clsx("sideNav-list-item", {
              "sideNav-list-item-active": this.props.selectedMenu === "Mentor",
            })}
          >
            <ListItemIcon
              className={clsx("list-item-icon", {
                "list-item-icon-active": this.props.selectedMenu === "Mentor",
              })}
            >
              <img src={mentor_icon} alt="mentor-icon" className="list-icon" />
            </ListItemIcon>
            <ListItemText primary="Mentor" className="list-item-text" />
          </ListItem>
          <ListItem
            button
            onClick={(e) => this.navigate(e, "Student")}
            className={clsx("sideNav-list-item", {
              "sideNav-list-item-active": this.props.selectedMenu === "Student",
            })}
          >
            <ListItemIcon
              className={clsx("list-item-icon", {
                "list-item-icon-active": this.props.selectedMenu === "Student",
              })}
            >
              <SchoolIcon className="list-icon" />
            </ListItemIcon>
            <ListItemText primary="Student" className="list-item-text" />
          </ListItem>
          <ListItem
            button
            onClick={(e) => this.navigate(e, "Course")}
            className={clsx("sideNav-list-item", {
              "sideNav-list-item-active": this.props.selectedMenu === "Course",
            })}
          >
            <ListItemIcon
              className={clsx("list-item-icon", {
                "list-item-icon-active": this.props.selectedMenu === "Course",
              })}
            >
              <CourseIcon />
            </ListItemIcon>
            <ListItemText primary="Course" className="list-item-text" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default SidenavBar;
