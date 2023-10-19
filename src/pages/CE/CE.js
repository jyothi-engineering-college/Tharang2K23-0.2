import classes from "./CE.module.css";
import Lists from "../CeDetail/CeLists";
import EventCard from "../../components/EventCard/EventCard";
import { useEffect } from "react";
import StayTuned from "../../components/StayTuned/StayTuned";

const CE = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.CE}>
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


export default CE;
