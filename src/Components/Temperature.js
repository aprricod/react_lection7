import React, { Component } from "react";
import { SCALE_NAMES } from "../consts";

export default class Temperature extends Component {
  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const { temperature, scale } = this.props;
    return (
      <fieldset>
        <legend>Температура в градусах {SCALE_NAMES[scale]}</legend>
        <input type="number" value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
