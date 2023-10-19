import classes from "../CSE/CSE.module.css";
import TechnicalLists from "../TechnicalDetail/TechnicalLists";
import EventCard from "../../components/EventCard/EventCard";
import { useEffect } from "react";

const Technical = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.CSE}>
      {TechnicalLists.map((list) => {
        return (
          <EventCard
            key={list.id}
            eventtitle={list.heading}
            eventDescription={list.desc}
            imgSrc={list.imgSrc}
            heading={list.name}  
            regFee={list.regFee} 
            contact={list.contact} 
            redirectLink={list.redirectLink}
          />
        );
      })}
    </div>
  );
};

export default Technical;
