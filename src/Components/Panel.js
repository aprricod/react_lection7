import React from "react";
import "./Panel.css";

export const Panel = ({ children }) => (
  <div className="container"> {children}</div>
);

/* 
children в { } тоже самое что props.children

export const Panel = (props) => (
     <div className="container"> {props.children}</div>
   );
*/
