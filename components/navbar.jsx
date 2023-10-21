import React from "react";
import GHicon from '../scr/github_icon.svg';
import "../styles/Navbar.css";


//  Creating my navbar

function Navbar() {
  return (
    <header className="navbar">
      <a href="https://github.com/Creators247?tab=repositories"><img className="logo" src={GHicon} alt="Git-Hub-Icon" /></a>
      <h1>The Creators GitHub.</h1>
    </header>
  );
}

export default Navbar;
