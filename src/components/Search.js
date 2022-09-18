import React from 'react';
import "./Search.css"

const SearchBar = () => {
    return (
        <div className="search-bar">
        <div className="icon"></div>
        <input
            key="random1"
            placeholder={"Search"}
        />
        </div>
    );
}

export default SearchBar