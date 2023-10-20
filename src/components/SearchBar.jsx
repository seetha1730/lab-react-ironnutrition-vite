import React, { useState } from "react";
import { Divider, Input } from "antd";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
 
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };



  return (

    <div className="searchProduct">
      <Divider>Search</Divider>
      
      <Input
        type="search"
        placeholder="Search Food"
        className="w-100"
        value={searchTerm}
        onChange={handleSearch}
      />
    
    </div>
  );
}

export default SearchBar;