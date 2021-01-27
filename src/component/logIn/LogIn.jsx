import React, { Component } from "react";
// import history from "../../History.js";
import loginImg from "../../assets/image/login.png"
import "./logIn.scss";
class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="login-container">
        <div className="login-picture"><img src={loginImg} alt="log-in-img" className="login-image" /></div>
        <div className="login-from"></div>
      </div>
    );
  }
}

export default LogIn;
