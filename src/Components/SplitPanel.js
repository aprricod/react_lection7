import React from "react";
import { Panel } from "./Panel";
import "./SplitPanel.css";

export const SplitPanel = ({ left, right }) => (
  <div className="split-panel">
    <div className="split-panel-left">
      <Panel>{left}</Panel>
    </div>
    <div className="split-panel-right">
      <Panel>{right}</Panel>
    </div>
  </div>
);
