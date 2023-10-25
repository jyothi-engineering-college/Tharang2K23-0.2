import React, { useEffect } from "react";
import classes from "./AD.module.css";
import ADLists from "../AdDetail/AdLists";
import EventCard from "../../components/EventCardR/EventCard.js";

const AD = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.AD}>
      {ADLists.map((list) => (
        <div key={list.id}>
          <EventCard
            eventtitle={list.heading}
            eventDescription={list.desc}
            imgSrc={list.imgSrc}
            heading={list.name}
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

export default AD;
