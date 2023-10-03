import classes from "./ME.module.css";
import MeLists from "../MeDetail/MeLists";
import EventCard from "../../components/EventCard/EventCard";
import { useEffect } from "react";

const ME = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.ME}>
      {MeLists.map((list) => {
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

export default ME;
