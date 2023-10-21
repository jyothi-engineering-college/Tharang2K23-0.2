import classes from "./EEE.module.css";
import EeeLists from "../EeeDetail/EeeLists";
import EventCard from "../../components/EventCardR/EventCard.js";
import { useEffect } from "react";

const Eee = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.Eee}>
      {EeeLists.map((list) => {
        return (
          <div key={list.id}>
            <EventCard
              eventtitle={list.heading}
              eventDescription={list.desc}
              imgSrc={list.imgSrc}
              heading={list.name}  
              regFee={list.regFee} 
              contact={list.contact} 
              redirectLink={`/events/EeeDetail/${list.name}`}
            />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Eee;
