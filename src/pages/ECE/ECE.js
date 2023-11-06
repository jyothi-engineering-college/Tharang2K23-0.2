import classes from "../EEE/EEE.module.css";
import ECeLists from "../EceDetail/EceLists";
import EventCard from "../../components/EventCardR/EventCard.js";
import { useEffect } from "react";

const ECe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.ECe}>
      {ECeLists.map((list) => {
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

export default ECe;
