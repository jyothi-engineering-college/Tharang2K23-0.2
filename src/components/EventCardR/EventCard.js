import React from "react";
import classes from "./EventCard.module.css";

const EventCard = (props) => {

  const handleCardClick = () => {
    window.location.href = props.redirectLink; 
  };

  return (
    <div className={classes.card} onClick={handleCardClick}>
      <div className={classes.cardInner}>
        <div className={classes.cardFront}>
          <div className={classes.imgBox}>
            <img className={classes.img} src={props.imgSrc} alt={props.heading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
