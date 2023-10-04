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
            <img className={classes.img} src={props.imgSrc} alt={props.heading} />
          </div>
          <div className={classes.textBox}>
            <h3 className={classes.heading}>{props.heading}</h3>
          </div>
        </div>

        {/* Back of the card */}
        <div
          className={`${classes.cardBack} ${isClicked ? classes.clicked : ""}`}
          onClick={() => setIsClicked(false)} // Toggle isClicked when clicking on the back
        >
          <div className={classes.backContent}>
            <h2 className={classes.eventTitle}>About the event</h2>
            <div className={classes.eventdescr}>
              <p>{props.eventDescription}</p>
            </div>
            <button
              className={classes.registerButton}
              onClick={handleRegisterClick}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
