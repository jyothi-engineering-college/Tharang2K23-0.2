import classes from "./MR.module.css";
import MrLists from "../MrDetail/MrLists";
import EventCard from "../../components/EventCard/EventCard";
import { useEffect } from "react";

const MR = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.MR}>
      {MrLists.map((list) => {
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

export default MR;
