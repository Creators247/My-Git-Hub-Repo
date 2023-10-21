import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Repos.css";

function Repos() {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(6);
  const [totalPage, setTotalPage] = useState([]);

  // fecthing Details from my Github repo
  useEffect(() => {
    fetch(`https://api.github.com/users/Creators247/repos`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  
  //  Getting my repo Cards
  const userElements = user.map((userElement) => {
    return (
      <div className="repo-card"  key={userElement.id}>

       <Link to={`/repos/${userElement.name}`} ><h3 className="repo-name">{userElement.name}</h3></Link> 

        <p className="language">Language: <b>{userElement.language === null ? "None" : userElement.language}</b></p>

        <p className="date"> Date Created: <b> {new Date(userElement.created_at).toDateString()}</b></p>

        <p className="Update">Last Update: <b>{new Date(userElement.updated_at).toDateString()}</b></p>

        <p className="visibility">Visibility: <b>{userElement.visibility}</b></p>

        <button><a href={userElement.html_url}>View on GitHub</a> </button>

      </div>
    );
  });
  

  // setting my pagination
  const Display = () => {
    if (userElements.length >= currentPage) {
        for (let i = 0; i < currentPage; i++) {
          totalPage.push({ ...userElements[i]});
        }
    } else {
      return userElements;
    }
    console.log(currentPage);
    return totalPage
  };


  // setting the pagination Buttons function
  function next(event) {
    if ( currentPage >= userElements.length) {
      event.target.textContent= "The End"
    } else {
    setCurrentPage((prev) => prev + 6);
    console.log(currentPage);
    }
  }

  return (
    <div className="MainRepo">
      <section className="repo-container">
        <Display />
      </section>
        <div>
          <p onClick={next}>Show More</p>
        </div>
    </div>
  );
}

export default Repos;
