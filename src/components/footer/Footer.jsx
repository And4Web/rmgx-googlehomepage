import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-upper">
          <p>India</p>
        </div>

        <div className="footer-lower">
          <div className="left-menu">
            <a href="/">About</a>
            <a href="/">Advertising</a>
            <a href="/">Business</a>
            <a href="/">How Search works</a>
          </div>
          <div className="right-menu">
            <a href="/">Privacy</a>
            <a href="/">Terms</a>
            <a href="/">Settings</a>
          </div>
        </div>
      </div>
    </>
  );
}
