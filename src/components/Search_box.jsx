import React from 'react';
import './Search_box.css';
import { CiSearch } from "react-icons/ci";
function Search_box() {
  return (
    <div>
        <div className="search-container">
            <input
            type="text"
            className="search-input"
            placeholder= " Search..."
            />
            <button className="search-icon">
                <CiSearch />
            </button>

        </div>
       
        
    </div>
  )
}

export default Search_box