import classes from "./RA.module.css";
import RaLists from "../RaDetail/RaLists";
import EventCard from "../../components/EventCardBSH/EventCard";
import { useEffect } from "react";

const RA = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.RA}>
      {RaLists.map((list) => {
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

export default RA;
