import React, { Component } from "react";
import "./Form.css";
import logo from "../assets/images/logo.png";

class Form extends Component {
  state = {
    username: "",
    password: "",
    correct: false,
    errors: {
      username: false,
      password: false,
    },
  };
  messages = {
    username: "at least 3 characters",
    password: "at least 3 characters",
  };

  inputHandleChange = (e) => {
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.chceked,
      });
    } else if (e.target.type === "text" || e.target.type === "password") {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  formValidation = () => {
    let username = false;
    let password = false;
    let correct = false;

    if (this.state.username.length >= 3) {
      username = true;
    }

    if (this.state.password.length >= 3) {
      password = true;
    }

    if (username && password) {
      correct = true;
    }
    return {
      username,
      password,
      correct,
    };
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.formValidation().correct) {
      this.setState({
        username: "",
        password: "",

        errors: {
          username: false,
          password: false,
        },
      });
    } else {
      this.setState({
        errors: {
          username: !this.formValidation().username,
          password: !this.formValidation().password,
        },
      });
    }
  };
  render() {
    return (
      <div className="box">
        <div className="logoBox">
          <img alt="logo" src={logo} />
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="inputBox">
            <input
              required="off"
              type="text"
              name="username"
              id="username"
              onChange={this.inputHandleChange}
            />
            <label htmlFor="username">Username:</label>
            {this.state.errors.username ? (
              <span>{this.messages.username}</span>
            ) : null}
          </div>
          <div className="inputBox">
            <input
              required="off"
              type="password"
              name="password"
              id="password"
              onChange={this.inputHandleChange}
            />
            <label htmlFor="password">Password:</label>
            {this.state.errors.password ? (
              <span>{this.messages.password}</span>
            ) : null}
          </div>
          <div className="btnBox">
            <button>Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
