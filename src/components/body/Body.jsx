import React from "react";
import SearchComponent from "../searchComponent/SearchComponent";

import "./body.css";
import googlelogo from "../../images/googleHomepage/googlelogo.jpg";

export default function body() {
  return (
    <div className="body">
      <img src={googlelogo} alt="googleLogo" />
      <SearchComponent />
    </div>
  );
}
