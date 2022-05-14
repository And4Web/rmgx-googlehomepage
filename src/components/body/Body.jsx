import React from "react";
import SearchComponent from "../searchComponent/SearchComponent";
import "./body.css";

export default function body() {
  const googleLogo =
    "https://cdn.vox-cdn.com/thumbor/p01ezbiuDHgRFQ-htBCd7QxaYxo=/0x105:2012x1237/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg";
  return (
    <div className="body">
      <img src={googleLogo} alt="googleLogo" />
      <SearchComponent />
    </div>
  );
}
