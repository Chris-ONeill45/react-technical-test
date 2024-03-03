import React from "react";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p className="search-message">No results</p>;
  } else {
    return (
      <div className="image-grid">
        {results.map((image) => (
          <img className="card-image" src={image} alt="spaceIamge" />
        ))}
      </div>
    );
  }
};

export default SearchResults;
