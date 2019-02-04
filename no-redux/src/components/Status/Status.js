import React, { Component } from "react";

export default class Status extends Component {
  render() {
    const { isEnough } = this.props;
    console.log("Status rendered");
    return (
      <div className="LayoutBottom">{isEnough && "Three dots selected!"}</div>
    );
  }
}
