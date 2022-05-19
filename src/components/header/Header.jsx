import React, { useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./header.css";
import ProductDropdown from "../../pages/productsPage/ProductDropdown";

export default function Header() {
  const [user, setUser] = useState(false);

  const appShow = () => {};
  return (
    <>
      <div className="header">
        <div className="navbar">
          <div className="menu-container">
            <a href="https://www.gmail.com">Gmail</a>
            <a href="https://www.google.co.in/imghp">Images</a>
            <AppsIcon className="appIconCustom" />
            {user ? (
              <a href="/">
                <AccountCircleIcon className="accountIconCustom" />
              </a>
            ) : (
              <button>Sign in</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
