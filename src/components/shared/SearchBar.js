import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
// import {Link} from "react-router-dom";
function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div
      className="search"
      style={{ marginTop: "-110px", borderRadius: "50px" }}
    >
      <div className="searchInputs" style={{ height: "35px",border:"3px solid #d111b4",borderRadius:"20px" }}>
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
          style={{ maxWidth: "300px",height:"10px",borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px",borderBottom:"2px solid #d111b4" }}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult" style={{ zIndex: "9999" }}>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a id="mainSearch" className="dataItem" href={value.product_link}>
                <p>{value.name}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
// product_api_url