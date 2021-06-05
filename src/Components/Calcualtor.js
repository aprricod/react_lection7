import React, { Component } from "react";
import { Boiling } from "./Boiling";

export default class Calcualtor extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Boiling celsius={110} />
        <Boiling celsius={85} />
        <Boiling celsius={0} />
      </div>
    );
  }
}
