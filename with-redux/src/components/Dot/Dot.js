import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../state/common/actions";
import "./Dot.css";

class Dot extends Component {
  shouldComponentUpdate(newProps) {
    const { value, selectedDots } = newProps;
    const isChanged = selectedDots[value] !== this.props.selectedDots[value];
    return isChanged ? true : false;
  }

  onClickHandler = e => {
    const { dispatch, value } = this.props;
    dispatch(actions.selectDotAsync(value));
  };

  render() {
    console.log("Dot rendered");
    const { color, value, selectedDots } = this.props;
    const dotColor = selectedDots[value] ? "yellow" : color;

    return (
      <div className={"Dot " + dotColor} onClick={this.onClickHandler}>
        <div>
          <div className={"innerValue"}>{value}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedDots: state.common.selectedDots
});

export default connect(mapStateToProps)(Dot);
