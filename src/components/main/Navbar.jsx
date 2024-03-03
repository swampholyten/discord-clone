import React from "react";

import './mainStyle/Navbar.css'

export default function Navbar() {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    console.log("Search term:", searchTerm);
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="logo">Logo</div>
        <ul className="nav-links">
          <li></li>
        </ul>
        <div className="search-container">
          <input type="text" placeholder="Search..." onChange={handleSearch} />
        </div>
      </div>
    </nav>
  );
}
