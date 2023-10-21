import React, { useState, use, Suspense } from "react";
import {ErrorBoundary } from "react-error-boundary";
import { useEffect } from "react";


const [user, setUser] = useState([]);


function Test() {
    return(
        <ErrorBoundary fallback={alert("worked")}>
            <Suspense fallback ={alert("loading")}>
                <Message />
            </Suspense>
        </ErrorBoundary>
    )
}

let g = useEffect(() => {
    fetch(`https://api.github.com/users/Creators247/repos`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

function Message() {
    let content = use(g)
    return <p>here is ur Message{console.log(user)}</p>
}
export default Test