import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchComponent.css";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

import { ActionTypes } from "@mui/base";

export default function SearchComponent(props) {
  const { hideButtons } = props;

  const [input, setInput] = useState();

  const navigate = useNavigate();
  console.log(input);

  const onClick = (e) => {
    e.preventDefault();

    navigate("/search");
  };

  return (
    <>
      <form className="search">
        <div className="search-input">
          <SearchIcon className="searchIconCustom" />
          <input value={input} onChange={(e) => setInput(e.target.value)} />
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
