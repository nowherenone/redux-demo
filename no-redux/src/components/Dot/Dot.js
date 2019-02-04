import React, { Component } from "react";
import "./Dot.css";

export default class Dot extends Component {
  onClickHandler = e => {
    const { value, onClick } = this.props;
    onClick && onClick(value);
  };

  render() {
    const { color, value } = this.props;
    console.log("Dot rendered");
    return (
      <div className={"Dot " + color} onClick={this.onClickHandler}>
        <div>
          <div className={"innerValue"}>{value}</div>
        </div>
      </div>
    );
  }
}
