import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <div className="hiddenLinks">
          <Link to="/" onClick={toggleNavbar}>
            <i className="fa-solid fa-house"></i> Blogs
          </Link>
          <Link to="/post/:id" onClick={toggleNavbar}>
            <i className="fa-solid fa-circle-info"></i> Blogs Details
          </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">
          <i className="fa-solid fa-house"></i> Blogs
        </Link>
        <Link to="/post/:id">
          <i className="fa-solid fa-circle-info"></i> Blogs Details
        </Link>
      </div>
    </div>
  );
}

export default Header;
