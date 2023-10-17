import React, { useState, useEffect } from "react";
import "./preLoader.css";
import Logo from "./wait.svg";

function PreLoader() {
  const [clickCount, setClickCount] = useState(0);
  const [loadingCompleted, setLoadingCompleted] = useState(false);
  const [hasClickedOnce, setHasClickedOnce] = useState(false);

  const handleLogoClick = () => {
    setClickCount(clickCount + 1);
    setHasClickedOnce(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingCompleted(true);
    }, 10000);  // Adjust this time based on your actual loading time.

    return () => clearTimeout(timer);  // Clean up timer on unmount
  }, []);

  return (
    <div className="preLoader">
      {loadingCompleted ? (
        <div>Your score: {clickCount}</div>
      ) : (
        <>
          <img className="preLoaderLogo" src={Logo} alt="preloader" onClick={handleLogoClick} />
          <h1 className="preLoaderheading">Loading</h1>
          {hasClickedOnce && <div className="scoreDisplay">Your score: {clickCount}</div>}
        </>
      )}
    </div>
  );
}

export default PreLoader;
