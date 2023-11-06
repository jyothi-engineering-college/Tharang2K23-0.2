import classes from "../AD/AD.module.css";
import MeLists from "../MeDetail/MeLists";
import EventCard from "../../components/EventCardR/EventCard.js";
import { useEffect } from "react";

const Me = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.Me}>
      {MeLists.map((list) => {
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

export default Me;
