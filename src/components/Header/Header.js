import { useState } from "react";
import classes from "./Header.module.css";
import { FiMenu } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";
import Dropdown from "./Dropdown";
import Logo from "./header_logo.jpg";

const Scroll = require("react-scroll");
const Drop = Scroll.Link;

const Header = () => {
  const [scrolled, isScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [drop, setDrop] = useState(false);

  window.onscroll = () => {
    isScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <header
      className={`${!scrolled ? classes.header : classes.scrolledHeader}`}
    >
      <div className={classes.elements}>
        <div className={classes.logobox}>
          <Drop
            activeClass={classes.active}
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}
          >
            <Link to="/">
              <img src={Logo} alt="/" className={classes.logo} />
            </Link>
          </Drop>
        </div>
        <div className={classes.navbox}>
          <ul className={classes.nav}>
            <li className={classes.navLink}>
              <Drop
                to="home"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/#home">
                  Home
                </Link>
              </Drop>
            </li>
            <li
              className={`${classes.dropLink}`}
              onClick={() => setDrop(!drop)}
            >
              {drop ? <Dropdown click={() => setDrop(!drop)} /> : ""}Events
              <FontAwesomeIcon
                size="sm"
                style={{
                  display: "inline-block",
                  marginLeft: ".3rem",
                  color: "#a50487",
                }}
                icon={faArrowDown}
                fade
              />
            </li>
            <li className={classes.navLink}>
              <Drop
                to="about"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/home#about">
                  About
                </Link>
              </Drop>
            </li>

            <li className={classes.navLink}>
              <Drop
                to="contact"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/home#contact">
                  Contact
                </Link>
              </Drop>
            </li>
            <li className={classes.navLink}>
              <Drop
                to="contact"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link
                  className={classes.homeLink}
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://tharang23.netlify.app/", "_blank");
                  }}
                >
                  Campus Ambassador
                </Link>
              </Drop>
            </li>
          </ul>
          <div className={classes.hamburger} onClick={() => setMobile(!mobile)}>
            {mobile ? (
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: "white" }}
                size="3x"
              />
            ) : (
              <FiMenu size={20} />
            )}
          </div>
        </div>
        <div className={`${!mobile ? classes.none : classes.mobileBox}`}>
          <ul className={classes.mobileNav}>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                to="home"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/#home">
                  Home
                </Link>
              </Drop>
            </li>
            <li className={`${classes.mobLink}`} onClick={() => setDrop(!drop)}>
              {drop ? (
                <Dropdown
                  click={() => {
                    setDrop(!drop);
                    setMobile(!mobile);
                  }}
                />
              ) : (
                ""
              )}
              Events
              <FontAwesomeIcon
                size="sm"
                style={{
                  display: "inline-block",
                  marginLeft: ".3rem",
                  color: "white",
                }}
                icon={faArrowDown}
                fade
              />
            </li>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                to="about"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/home#about">
                  About
                </Link>
              </Drop>
            </li>

            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                to="contact"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link className={classes.homeLink} to="/home#contact">
                  Contact
                </Link>
              </Drop>
            </li>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                to="contact"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link
                  className={classes.homeLink}
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://tharang23.netlify.app/", "_blank");
                  }}
                >
                  Campus Ambassador
                </Link>
              </Drop>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
