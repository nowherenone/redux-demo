import React, { Component } from "react";
import Matrix from "../Matrix/Matrix";
import Status from "../Status/Status";
import "./Layout.css";

export default class Layout extends Component {
  state = {
    selectedDots: {},
    dotCount: 42,
    isEnough: false
  };

  onDotClickHandler = value => {
    const { selectedDots } = this.state;
    selectedDots[value] = !selectedDots[value];

    const isEnough =
      Object.keys(selectedDots).filter(k => selectedDots[k]).length > 2;

    this.setState({ selectedDots, isEnough });
  };

  render() {
    const { selectedDots, isEnough, dotCount } = this.state;

    return (
      <>
        <div className="Layout">
          <Matrix
            onDotClick={this.onDotClickHandler}
            dotCount={dotCount}
            color={"blue"}
          />
          <div className={"spacer"} />
          <Matrix dotStatus={selectedDots} dotCount={dotCount} color={"red"} />
        </div>
        <Status isEnough={isEnough} />
      </>
    );
  }
}
