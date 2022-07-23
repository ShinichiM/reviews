import React from "react";

const Header = () => {
  return (
    <header>
      <div className="navContainer">
        <ul>
          <li>Home</li>
          <li>Library</li>
          <li>Notes</li>
        </ul>

        <div className="hamburgerContainer">
          <span className="hamburgerLine"></span>
          <span className="hamburgerLine"></span>
          <span className="hamburgerLine"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
