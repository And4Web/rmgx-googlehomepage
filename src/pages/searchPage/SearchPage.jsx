import React from "react";
import { Link } from "react-router-dom";
import "./searchPage.css";
import SearchComponent from "../../components/searchComponent/SearchComponent";
import SearchIcon from "@mui/icons-material/Search";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import FeedIcon from "@mui/icons-material/Feed";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";

function SearchPage() {
  return (
    <div className="searchpage">
      <div className="searchpage_header">
        <div className="searchpage_inputbar">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" />
          <SearchComponent hideButtons />
        </div>
        <div className="searchpage_optionsbar">
          <div className="searchpage_options_left">
            <div className="searchpage_option">
              <SearchIcon className="option_icon" />
              <Link to="/" className="option_name">
                All
              </Link>
            </div>
            <div className="searchpage_option">
              <ImageSearchIcon className="option_icon" />
              <Link to="/" className="option_name">
                Images
              </Link>
            </div>
            <div className="searchpage_option">
              <LocationOnIcon className="option_icon" />
              <Link to="/" className="option_name">
                Maps
              </Link>
            </div>
            <div className="searchpage_option">
              <OndemandVideoIcon className="option_icon" />
              <Link to="/" className="option_name">
                Videos
              </Link>
            </div>
            <div className="searchpage_option">
              <FeedIcon className="option_icon" />
              <Link to="/" className="option_name">
                News
              </Link>
            </div>
            <div className="searchpage_option">
              <MoreVertIcon className="option_icon" />
              <Link to="/" className="option_name">
                More
              </Link>
            </div>
            <div className="searchpage_option"></div>
          </div>
          <div classname="searchbar_options_right">
            <Link to="/" className="searchpage_name_tools">
              Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
