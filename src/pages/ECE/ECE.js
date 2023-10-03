import classes from "./ECE.module.css";
import EceLists from "../EceDetail/EceLists";
import EventCard from "../../components/EventCard/EventCard";
import { useEffect } from "react";

const ECE = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.ECE}>
      {EceLists.map((list) => {
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

export default ECE;
