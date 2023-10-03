import classes from "./EEE.module.css";
import EeeLists from "../EeeDetail/EeeLists";
import EventCard from "../../components/EventCard/EventCard";
import { useEffect } from "react";

const EEE = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.EEE}>
      {EeeLists.map((list) => {
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

export default EEE;
