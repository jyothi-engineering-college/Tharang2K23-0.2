import classes from "./BSH.module.css";
import BshLists from "../BshDetail/BshLists";
import EventCard from "../../components/EventCardAD/EventCard";
import { useEffect } from "react";

const BSH = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.BSH}>
      {BshLists.map((list) => {
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

export default BSH;
