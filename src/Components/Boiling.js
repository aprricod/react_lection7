import React from "react";
import "./Boiling.css";

export const Boiling = (props) => {
  if (props.celsius >= 100) {
    return <p className="hot">Вода кипит</p>;
  }
  if (props.celsius <= 0) {
    return <p className="cold">Вода замерзла</p>;
  }
  // условие ниже не пишем, потому что верхние условия отрезают концы
  // if (props.celsius > 0 && props.celsius < 100) {
  return <p className="norm">Вода норм</p>;
};
