import classes from "./Events.module.css";
import Background from "../../UI/Background";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <section className={classes.events}>
      <Background className={classes.eventBox}>
        <div className={classes.imgBox}>
          <img
            className={classes.img}
            src="assets/Ambassador/2.png"
            alt="Ambassador"
          />
        </div>

        <div className={classes.headingBox}>
          <h3 className={classes.heading}>Tharang 23 Events</h3>
          <p className={classes.para}>
            Tharang typically includes a range of events such as coding
            challenges, hackathons, robotics competitions, workshops,
            exhibitions, and talks by experts in the tech industry. These events
            provide participants with a unique opportunity to learn, network,
            and showcase their skills and knowledge in various fields of science
            and engineering.
          </p>

          <Link
            to="/events/CSE"
            className={classes.button1}
            rel="noopener noreferrer"
          >
            Explore our events !
          </Link>
        </div>
      </Background>
    </section>
  );
};

export default Events;
