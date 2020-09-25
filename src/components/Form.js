import React, { Component } from "react";

class Form extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };
  render() {
    return (
      <form>
        <label htmlFor="username">
          Username
          <input type="text" id="username" />
        </label>
      </form>
    );
  }
}

export default Form;
