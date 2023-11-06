import classes from "./CSE.module.css";
import CSELists from "../CseDetail/CseLists";
import EventCard from "../../components/EventCardR/EventCard.js";
import { useEffect } from "react";

const CSE = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.CSE}>
      {CSELists.map((list) => {
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

export default CSE;
