import React, { Component } from "react";
import "./Form.css";
import logo from "../assets/images/logo.png";

class Form extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };
  inputHandleChange = (e) => {
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.chceked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  render() {
    return (
      <div className="box">
        <div className="logoBox">
          <img alt="logo" src={logo} />
        </div>

        <form autocomplete="off">
          <div className="inputBox">
            <input type="text" name="username" id="username" />
            <label htmlFor="username">Username:</label>
          </div>
          <div className="inputBox">
            <input type="password" name="password" id="password" />
            <label htmlFor="password">Password:</label>
          </div>
          <div className="btnBox">
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
