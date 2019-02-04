import React, { Component } from "react";
import Dot from "../Dot/Dot";
import "./Matrix.css";

export default class Matrix extends Component {
  drawDots = () => {
    const { dotCount = 0, color, onDotClick, dotStatus = {} } = this.props;

    return [...Array(dotCount)].map((v, i) => (
      <Dot
        onClick={onDotClick}
        color={dotStatus[i] ? "yellow" : color}
        key={i}
        value={i}
      />
    ));
  };

  render() {
    return <div className="Matrix">{this.drawDots()}</div>;
  }
}
