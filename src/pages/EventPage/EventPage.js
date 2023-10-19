import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Background from "../../UI/Background";
import classes from "./EventPage.module.css";
import eventsData from "./data.json";

const EventPage = () => {
  return (
    <section className={classes.eventPage}>
      <Background className={classes.bg}>
        <div className={classes.tabs}>
          <div className={classes.tabList}>
            {eventsData.map((event, index) => (
              <div key={index} className={classes.tabHead}>
                <NavLink
                  to={event.path}
                  className={({ isActive }) =>
                    isActive
                      ? `${classes.active} ${classes.links}`
                      : `${classes.links}`
                  }
                >
                  {event.name}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        <Outlet />
      </Background>
    </section>
  );
};

export default EventPage;
