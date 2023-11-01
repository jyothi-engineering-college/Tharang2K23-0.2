import classes from "./CSE.module.css";
import Lists from "../CseDetail/CseLists";
import EventCard from "../../components/EventCard/EventCard";
import { useEffect } from "react";
import StayTuned from "../../components/StayTuned/StayTuned";

const CSE = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.CSE}>
      {Lists.length > 0 ? (
      Lists.map((list) => {
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


export default CSE;
