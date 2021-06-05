import React, { Component } from "react";
import { Boiling } from "./Boiling";
import Temperature from "./Temperature";
import { CELSIUS, FAHRENHEIT } from "../consts";

export default class Calcualtor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: 0,
      scale: "CELSIUS",
    };
  }

  handleChange = (e) => {
    this.setState({
      temperature: e.target.value,
    });
  };

  toCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  toFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === FAHRENHEIT
        ? this.tryConvert(temperature, this.toCelsius)
        : temperature;
    const fahrenheit =
      scale === CELSIUS
        ? this.tryConvert(temperature, this.toFahrenheit)
        : temperature;
    return (
      <React.Fragment>
        <Temperature
          scale={CELSIUS}
          temperature={celsius}
          onTemperatureChange={(temperature) => {
            this.setState({ scale: CELSIUS, temperature });
          }}
        />
        <Temperature
          scale={FAHRENHEIT}
          temperature={fahrenheit}
          onTemperatureChange={(temperature) => {
            this.setState({ scale: FAHRENHEIT, temperature });
          }}
        />
        <Boiling celsius={celsius} />
      </React.Fragment>
    );
  }
}
