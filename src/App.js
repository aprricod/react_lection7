import React from "react";
import "./App.css";
import Calcualtor from "./Components/Calcualtor";
import { Panel } from "./Components/Panel";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Panel>
          <Calcualtor />
        </Panel>
      </div>
    );
  }
}
