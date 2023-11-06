import React, { useState } from "react";
import classes from "./EventCard.module.css";

const EventCard = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked);
  };

  const handleRegisterClick = (event) => {
    event.stopPropagation(); // Prevent card click when the button is clicked
    window.location.href = props.redirectLink; // Redirect to the specified link
  };
  const isMobile = window.innerWidth <= 768;

  return (
    <div
      className={`${classes.card} ${isClicked ? classes.clicked : ""}`}
      onClick={handleCardClick}
    >
      <div className={classes.cardInner}>
        {/* Front of the card */}
        <div
          className={`${classes.cardFront} ${isClicked ? classes.clicked : ""}`}
          onClick={() => setIsClicked(false)} // Toggle isClicked when clicking on the front
        >
          <div className={classes.imgBox}>
            <img
              className={classes.img}
              src={props.imgSrc}
              alt={props.heading}
            />
          </div>
        </div>

        {/* Back of the card */}
        <div
          className={`${classes.cardBack} ${isClicked ? classes.clicked : ""}`}
          onClick={() => setIsClicked(false)} // Toggle isClicked when clicking on the back
        >
          <div className={classes.backContent}>
            <div className={classes.eventdescr}>
              {isMobile ? (
                <h1 className={classes.heading}>{props.heading}</h1>
              ) : null}
              <div style={isMobile ? { display: "none" } : {}}>
                <p>{props.eventDescription}</p>
              </div>
              <p className={classes.fees}>
                Registration fees is &nbsp;
                <span className={classes.amount}>{props.regFee}</span>
              </p>
              <p>For more details</p>
              <p className={classes.cont} >{props.contact}</p>
            </div>

            <button
              alt="Know more"
              className={classes.redirectLink}
              onClick={handleRegisterClick}
            >
              <i>K</i>
              <i>n</i>
              <i>o</i>
              <i>w</i>
              <i> </i>
              <i>m</i>
              <i>o</i>
              <i>r</i>
              <i>e</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;