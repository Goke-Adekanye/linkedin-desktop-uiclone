import React from "react";
import "./styles/inputOption.css";

export default function InputOption({ Icon, color, title }) {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}
