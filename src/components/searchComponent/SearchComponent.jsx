import React from "react";
import "./searchComponent.css";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

export default function SearchComponent(props) {
  const { hideButtons } = props;
  return (
    <>
      <form className="search">
        <div className="search-input">
          <SearchIcon className="searchIconCustom" />
          <input />
        </div>
        {!hideButtons && (
          <div className="search-buttons">
            <Button className="buttonCustom" type="submit" varient="outline">
              Google search
            </Button>
            <Button className="buttonCustom" varient="outline">
              I'm feeling Lucky
            </Button>
          </div>
        )}
      </form>
    </>
  );
}
