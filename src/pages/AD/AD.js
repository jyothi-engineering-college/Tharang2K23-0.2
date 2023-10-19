import classes from "./AD.module.css";
import AdLists from "../AdDetail/AdLists";
import EventCard from "../../components/EventCard/EventCard";
import { useEffect } from "react";
import StayTuned from "../../components/StayTuned/StayTuned"; // Import the StayTuned component

const AD = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.AD}>
      {AdLists.length > 0 ? (
        AdLists.map((list) => {
          return (
            <EventCard
              key={list.id}
              imgSrc={list.imgSrc}
              heading={list.heading}
              redirectLink={list.redirectLink}
            />
          );
        })
      ) : (
        <StayTuned />
      )}
    </div>
  );
};

export default AD;
