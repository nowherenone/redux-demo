import React, { Component } from "react";
import { connect } from "react-redux";
import Dot from "../Dot/Dot";
import "./Matrix.css";

class Matrix extends Component {
  drawDots = () => {
    const { dotCount, color } = this.props;
    return [...Array(dotCount)].map((v, i) => (
      <Dot color={color} key={i} value={i} />
    ));
  };

  render() {
    return <div className="Matrix">{this.drawDots()}</div>;
  }
}

const mapStateToProps = state => ({
  dotCount: state.common.dotCount
});

export default connect(mapStateToProps)(Matrix);
