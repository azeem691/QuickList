import React from "react";
import "./ColorCircle.css";

const ColorCircle = ({ tagName }) => {
  const circleStyle = {
    work: { backgroundColor: "#d2ceff" },
    study: { backgroundColor: "#d1e5f7" },
    entertainment: { backgroundColor: "#ffcece" },
    family: { backgroundColor: "#daf2d6" },
  };

  return <div className="colored_circle" style={circleStyle[tagName]}></div>;
};

export default ColorCircle;
