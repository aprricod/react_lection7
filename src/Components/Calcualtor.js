import React, { Component } from "react";
import { Boiling } from "./Boiling";

export default class Calcualtor extends Component {
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
    //   ниже два вариант обявления константы. первый вариант "деструктуризация"
    const { temperature } = this.state;
    // const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Температура</legend>
        <input type="number" value={temperature} onChange={this.handleChange} />
        <Boiling celsius={temperature} />
      </fieldset>
    );
  }
}
