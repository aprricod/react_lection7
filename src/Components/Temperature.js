import React, { Component } from "react";
import { SCALE_NAMES } from "../consts";

export default class Temperature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: 0,
    };
  }

  handleChange = (e) => {
    this.setState({
      temperature: e.target.value,
    });
  };

  render() {
    const { temperature } = this.state;
    const { scale } = this.props;
    return (
      <fieldset>
        <legend>Температура в градусах {SCALE_NAMES[scale]}</legend>
        <input type="number" value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
