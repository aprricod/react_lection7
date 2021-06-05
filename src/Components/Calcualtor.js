import React, { Component } from "react";
import Temperature from "./Temperature";

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
    return (
      <React.Fragment>
        <Temperature scale="CELSIUS" />
        <Temperature scale="FAHRENHEIT" />
      </React.Fragment>
    );
  }
}
