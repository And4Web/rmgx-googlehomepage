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
          <Link to="/">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" />
          </Link>
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

      <div className="search_results">
        <div className="search_count">
          <p>About 2,77,00,00,000 results (0.50 seconds)</p>
        </div>
        <div className="search_result">
          <div className="search_result_link">
            <div className="upper_link">
              <p>https://www.merriam-webster.com /dictionary/search</p>
              <MoreVertIcon className="link_more_icon" />
            </div>
            <a href="https://www.merriam-webster.com/dictionary/search">
              <h2 className="search_result_title">
                Search Definition & Meaning - Merriam - Webster
              </h2>
            </a>
          </div>
          <p className="search_result_description">
            Definition of search ; 1 to look into or over carefully or
            thoroughly in an effort to find or discover something: such as ; a
            to examine in seeking something ; b ...
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
