import React, { Component } from "react";
import "./App.css";
import Form from "./Form";

class app extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Witcher Login</h1>
        <Form />
      </React.Fragment>
    );
  }
}

export default app;
