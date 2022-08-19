import React from "react";
import { useState } from "react";
import "../App.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuClick = function () {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <header className="textColorOne headerSize">
      <div className="navContainer">
        <div className="hamburgerContainer" onClick={menuClick}>
          <span className="hamburgerLine"></span>
          <span className="hamburgerLine"></span>
          <span className="hamburgerLine"></span>
        </div>
      </div>
      {isMenuOpen ? (
        <ul className="">
          <li>Home</li>
          <li>Books</li>
          <li>WatchList</li>
        </ul>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
