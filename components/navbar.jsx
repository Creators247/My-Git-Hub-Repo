import React from "react";
import GHicon from "../scr/github_icon.svg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

// creating the function for my side bar
function sidebar(event) {
  if (event.target.localName == "button") {
    if (event.target.nextElementSibling.style.display == "") {
      event.target.nextElementSibling.style.display = "flex";
      event.target.innerHTML = `<img src="../scr/xx.svg" alt="">`;
    } else {
      event.target.nextElementSibling.style.display = "";
      event.target.innerHTML = `<img src="../scr/start.svg" alt="">`;
    }
  } else {
    if (event.target.parentElement.nextElementSibling.style.display == "") {
      event.target.parentElement.nextElementSibling.style.display = "flex";
      event.target.parentElement.innerHTML = `<img src="../scr/xx.svg" alt="">`;
    } else {
      event.target.parentElement.nextElementSibling.style.display = "";
      event.target.parentElement.innerHTML = `<img src="../scr/start.svg" alt="">`;
    }
  }
}

//  Creating my navbar
function Navbar() {
  return (
    <section>
      <button className="sidebarbutton" onClick={sidebar}>
        <img src="../scr/start.svg" alt="" onClick={sidebar} />
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
          <Link>
            <button className="navbutton">Error boundary</button>
          </Link>
        </nav>
      </header>
    </section>
  );
}

export default Navbar;
