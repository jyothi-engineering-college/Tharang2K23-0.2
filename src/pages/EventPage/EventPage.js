import { NavLink, Outlet } from "react-router-dom";
import Background from "../../UI/Background";
import classes from "./EventPage.module.css";

const EventPage = () => {
  return (
    <section className={classes.eventPage}>
      <Background className={classes.bg}>
        <div className={classes.tabs}>
           <div className={classes.tabList}>
            {/*<div className={`${classes.tabHead}`}>
              <NavLink
                to="cultural"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.links}`
                    : `${classes.links}`
                }
              >
                Cultural
              </NavLink>
            </div> */}
            {/* <div className={`${classes.tabHead}`}>
              <NavLink
                to="technical"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.links}`
                    : `${classes.links}`
                }
              >
                Workshops
              </NavLink>
            </div> */}
            {/* <div className={`${classes.tabHead}`}>
              <NavLink
                to="games"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.links}`
                    : `${classes.links}`
                }
              >
                Games
              </NavLink>
            </div> */}
            {/* <div className={`${classes.tabHead}`}>
              <NavLink
                to="hackathon"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.links}`
                    : `${classes.links}`
                }
              >
                Hackathon
              </NavLink>
            </div> */}
            {/* <div className={`${classes.tabHead}`}>
              <NavLink
                to="talk"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.links}`
                    : `${classes.links}`
                }
              >
                Expert Talk
              </NavLink>
            </div> */}
            <div className={`${classes.tabHead}`}>
              <NavLink
                to="AD"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.links}`
                    : `${classes.links}`
                }
              >
                AD
              </NavLink>
            </div>
            <div className={`${classes.tabHead}`}>
              <NavLink
                to="BSH"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.links}`
                    : `${classes.links}`
                }
              >
                BSH
              </NavLink>
            </div>
              
            <div className={`${classes.tabHead}`}>
              <NavLink
                to="CSE"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.links}`
                    : `${classes.links}`
                }
              >
                CSE
              </NavLink>
            </div>

            <div className={`${classes.tabHead}`}>
              <NavLink
                to="CE"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.links}`
                    : `${classes.links}`
                }
              >
                CE
              </NavLink>
            </div>
            <div className={`${classes.tabHead}`}>
              <NavLink
                to="ECE"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.links}`
                    : `${classes.links}`
                }
              >
                ECE
              </NavLink>
            </div>

            <div className={`${classes.tabHead}`}>
              <NavLink
                to="EEE"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.links}`
                    : `${classes.links}`
                }
              >
                EEE
              </NavLink>
            </div>

            <div className={`${classes.tabHead}`}>
              <NavLink
                to="ME"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.links}`
                    : `${classes.links}`
                }
              >
                ME
              </NavLink>
            </div>

            <div className={`${classes.tabHead}`}>
              <NavLink
                to="MR"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.links}`
                    : `${classes.links}`
                }
              >
                MR
              </NavLink>
            </div>

            <div className={`${classes.tabHead}`}>
              <NavLink
                to="RA"
                className={({ isActive }) =>
                  isActive
                    ? `${classes.active} ${classes.links}`
                    : `${classes.links}`
                }
              >
                RA
              </NavLink>
            </div>

          </div>
        </div>
        <Outlet />
      </Background>
    </section>
  );
};

export default EventPage;
