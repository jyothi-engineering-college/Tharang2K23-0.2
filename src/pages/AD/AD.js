import classes from "./AD.module.css";
import AdLists from "../AdDetail/AdLists";
import EventCard from "../../components/EventCard/EventCard";
import { useEffect } from "react";

const AD = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.AD}>
      {AdLists.map((list) => {
        return (
          <EventCard
            key={list.id}
            imgSrc={list.imgSrc}
            heading={list.heading}
            redirectLink={list.redirectLink}
          />
        );
      })}
    </div>
  );
};

export default AD;
