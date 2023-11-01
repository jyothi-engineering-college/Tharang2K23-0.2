import classes from "./MR.module.css";
import Lists from "../MrDetail/MrLists";
import EventCard from "../../components/EventCardR/EventCard";
import { useEffect } from "react";
import StayTuned from "../../components/StayTuned/StayTuned";

const MR = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={classes.Eee}>
      {Lists.map((list) => {
        return (
          <div key={list.id}>
            <EventCard
              eventtitle={list.heading}
              eventDescription={list.desc}
              imgSrc={list.imgSrc}
              heading={list.name}  
              regFee={list.regFee} 
              contact={list.contact} 
              redirectLink={list.redirectLink}
            />
            <br />
          </div>
        );
      })}
    </div>
  );
};
export default MR;
