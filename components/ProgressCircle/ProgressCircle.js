import React from "react";
import { ProgressCircleWrapper } from "./ProgressCircleWrapper";

export const ProgressCircle = ({ number, label, icon, on }) => {
  return (
    <ProgressCircleWrapper>
      <div className={`icon ${on ? "blue" : ""}`}>{icon}</div>
      <div className="number">{number}</div>
      <div className="label">{label}</div>
    </ProgressCircleWrapper>
  );
};
