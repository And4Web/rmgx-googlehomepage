import React from "react";
import "./customButton.css";

export default function CustomButton(props) {
  const { value } = props;

  return (
    <div className="custombutton">
      <button>{value}</button>
    </div>
  );
}
