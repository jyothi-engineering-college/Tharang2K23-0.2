import React, { useEffect } from "react";
import classes from "./CE.module.css";
import CELists from "../CeDetail/CeLists";
import EventCard from "../../components/EventCardR/EventCard.js";

const CE = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.CE}>
      {CELists.map((list) => (
        <div key={list.id}>
          <EventCard
            eventtitle={list.heCEing}
            eventDescription={list.desc}
            imgSrc={list.imgSrc}
            heCEing={list.name}
            regFee={list.regFee}
            contact={list.contact}
            redirectLink={list.redirectLink}
          />
          <br />
        </div>
      ))}
    </div>
  );
};

export default CE;
