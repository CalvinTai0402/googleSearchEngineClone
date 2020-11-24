import React from "react";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import Response from "../response";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  const [{ term = "CS314" }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  // const data = Response;
  // console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google Logo"
          ></img>
        </Link>
        <div>
          <div className="searchPage_headerBody">
            <Search hideButtons></Search>
            <div className="searchPage_options">
              <div className="searchPage_optionsLeft">
                <div className="searchPage_option">
                  <SearchIcon></SearchIcon>
                  <Link to="/all">All</Link>
                </div>
                <div className="searchPage_option">
                  <DescriptionIcon></DescriptionIcon>
                  <Link to="/news">News</Link>
                </div>
                <div className="searchPage_option">
                  <ImageIcon></ImageIcon>
                  <Link to="/images">Images</Link>
                </div>
                <div className="searchPage_option">
                  <LocalOfferIcon></LocalOfferIcon>
                  <Link to="/shopping">Shopping</Link>
                </div>
                <div className="searchPage_option">
                  <RoomIcon></RoomIcon>
                  <Link to="/maps">Maps</Link>
                </div>
                <div className="searchPage_option">
                  <MoreVertIcon></MoreVertIcon>
                  <Link to="/more">More</Link>
                </div>
              </div>
              <div className="searchPage_optionsRight">
                <div className="searchPage_option">
                  <Link to="/settings">Settings</Link>
                </div>
                <div className="searchPage_option">
                  <Link to="/tools">Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {true && (
        <div className="searchPage_results">
          <div className="searchPage_resultCount">
            <p>
              About {data?.searchInformation.formattedTotalResults}(
              {data?.searchInformation.searchTime}) for {term}
            </p>
            {data?.items.map((item) => (
              <div className="searchPage_result">
                <a href={item.link}>{item.displayLink}</a>
                <a className="searchPage_resultTitle" href={item.link}>
                  <h2>{item.title}</h2>
                </a>
                <p className="searchPage_resultSnippet">{item.snippet}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
