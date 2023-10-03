import classes from "./CSE.module.css";
import CseLists from "../CseDetail/CseLists";
import EventCard from "../../components/EventCard/EventCard";
import { useEffect } from "react";

const CSE = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.CSE}>
      {CseLists.map((list) => {
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

export default CSE;
