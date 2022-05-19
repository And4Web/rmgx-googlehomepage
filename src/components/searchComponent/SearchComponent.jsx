import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchComponent.css";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

export default function SearchComponent(props) {
  const { hideButtons } = props;

  const [state, setState] = useState();
  const nav = useNavigate();
  console.log(state);

  const onClick = (e) => {
    e.preventDefault();
    nav("/search");
  };

  return (
    <>
      <form className="search">
        <div className="search-input">
          <SearchIcon className="searchIconCustom" />
          <input value={state} onChange={(e) => setState(e.target.value)} />
        </div>
        {!hideButtons && (
          <div className="search-buttons">
            <Button
              onClick={onClick}
              className="buttonCustom"
              type="submit"
              varient="outline"
            >
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
