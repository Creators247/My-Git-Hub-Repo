import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/404.css";

// setting my function for the text type animation
const TypingAnimation = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <div>{displayText}</div>;
};
// the words to apprear
function Unknown() {
  let word1 = `Oops! 😲 It seems you've taken a wrong turn.`;
  let word2 = `The page you're looking for has gone on vacation or simply doesn't exist 👻 in this corner of the internet.`;
  let word3 = `Don't worry though 😁, we're here to help you get back on track ! Here are a few options to find what youre looking for:`;
  let word4 = `Here are a few options to find what youre looking for 🤷‍♂️ :`;
  let word5 = `1} Double-check the URL for typos – sometimes, a tiny mistake can lead you astray.`;
  let word6 = `2} Visit our Hompage to explore our website from the beginning.`;

  return (
    <div className="Holder404">
      <h1>404</h1>
      <p>
        <TypingAnimation text={word1} speed={40} />
      </p>
      <p>
        <TypingAnimation text={word2} speed={40} />
      </p>
      <p>
        <TypingAnimation text={word3} speed={40} />
      </p>
      <p>
        <TypingAnimation text={word4} speed={40} />
      </p>
      <p>
        <TypingAnimation text={word5} speed={40} />
      </p>
      <p>
        <TypingAnimation text={word6} speed={40} />
      </p>
      <Link to="/">
        <button className="navbutton">
          <p>
            <TypingAnimation text={"Home Page"} speed={100} />
          </p>
        </button>
      </Link>
    </div>
  );
}
export default Unknown;
