import React, { Component } from "react";
import Matrix from "../Matrix/Matrix";
import Status from "../Status/Status";
import "./Layout.css";

export default class Layout extends Component {
  render() {
    return (
      <>
        <div className="Layout">
          <Matrix color={"blue"} />
          <div className={"spacer"} />
          <Matrix color={"red"} />
        </div>
        <Status />
      </>
    );
  }
}
