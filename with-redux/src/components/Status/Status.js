import React, { Component } from "react";
import { connect } from "react-redux";

class Status extends Component {
  render() {
    const { isEnough } = this.props;
    console.log("Status rendered");
    return (
      <div className="LayoutBottom">{isEnough && "Three dots selected!"}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isEnough: state.common.isEnough
  };
};

export default connect(mapStateToProps)(Status);
