import React from "react";
import GHicon from "../scr/github_icon.svg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import {FiMenu} from "react-icons/fi"
import {FiShuffle} from "react-icons/fi"
import { useState } from "react";


//  Creating my navbar
function Navbar() {
  const [icon , setIcon] = useState(<FiMenu />)
  
  // creating the function for my side bar

  function sidebar(event) {
    let button = document.getElementById('BT')
  if (event.target.localName == "button") {
    if (event.target.nextElementSibling.style.display == "") {
      event.target.nextElementSibling.style.display = "flex";
     setIcon(<FiShuffle />)
    } else {
      event.target.nextElementSibling.style.display = "";
      setIcon(<FiMenu />)
    }
  } else {
    console.dir(button);
    console.dir(event.target);
    if (button.nextElementSibling.style.display == "") {
      button.nextElementSibling.style.display = "flex";
      setIcon(<FiShuffle />)
    } else {
      button.nextElementSibling.style.display = "";
      setIcon(<FiMenu />)
    }
  }
}
  return (
    <section>
      <button id="BT" className="sidebarbutton" onClick={sidebar}>
        {icon}
      </button>
      <header className="navbar">
        <div className="gitlogo">
          <a href="https://github.com/Creators247?tab=repositories">
            <img className="logo" src={GHicon} alt="Git-Hub-Icon" />
          </a>
          <h1>The Creators GitHub.</h1>
        </div>
        <nav>
          <Link to="/">
            {" "}
            <button className="navbutton">Home Page</button>
          </Link>
          <Link to="/*">
            <button className="navbutton">404 Page</button>
          </Link>
          <Link to= "/error-boundary">
            <button className="navbutton">Error boundary</button>
          </Link>
        </nav>
      </header>
    </section>
  );
}

export default Navbar;
