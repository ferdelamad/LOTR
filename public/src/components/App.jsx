import React, { Component, Fragment } from "react";
import { sampleData } from "../sampleData";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: sampleData
    };
  }
  render() {
    console.log("data", this.state.data);
    return (
      <Fragment>
        <h1>LOTR Loading!</h1>
      </Fragment>
    );
  }
}
