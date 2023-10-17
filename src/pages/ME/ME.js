import classes from "./ME.module.css";
import Lists from "../MeDetail/MeLists";
import EventCard from "../../components/EventCardBSH/EventCard";
import { useEffect } from "react";
import StayTuned from "../../components/StayTuned/StayTuned";

const ME = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.ME}>
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


export default ME;
