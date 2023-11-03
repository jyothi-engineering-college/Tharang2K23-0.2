import classes from "../EEE/EEE.module.css";
import TechLists from "../TechnicalDetail/TechLists.js";
import EventCard from "../../components/EventCard/EventCard.js";
import { useEffect } from "react";

const Tech = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.Eee}>
      {TechLists.map((list) => {
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
export default Tech;
