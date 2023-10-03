import classes from "./CE.module.css";
import CeLists from "../CeDetail/CeLists";
import EventCard from "../../components/EventCard/EventCard";
import { useEffect } from "react";

const CE = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.CE}>
      {CeLists.map((list) => {
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

export default CE;
