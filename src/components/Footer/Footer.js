import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { HashLink } from "react-router-hash-link";
import Logo from "./header_logo-2.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.row}>
        <div className={`${classes.col} ${classes.centerVertically}`}>
          <img className={classes.logo} src={Logo} alt="Tarang logo" />
        </div>

        <div className={classes.col}>
          <h2>Contact us</h2>
          <p>Jyothi Engineering College, Cheruthuruthy</p>
          <p>Cheruthuruthy - P.O</p>
          <p>Kerala 679531</p>
          <p className={classes.email}>info@jecc.ac.in</p>
          <p className={classes.contactNo}>04884 - 259000</p>
          <p className={classes.contactNo}>04884 - 274423</p>
        </div>

        <div className={classes.col}>
          <h2>Links</h2>
          <ul className={classes.noBullets}>
            {" "}
            {/* Added class to remove bullets */}
            <HashLink
              to="/#about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>About</li>
            </HashLink>
            <HashLink
              to="/#contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Contact us</li>
            </HashLink>
            <a
              href="https://docs.google.com/document/d/1cJfjOhoEfW_JhiMF-tUJXNWwRKxSIN-KrIlJCnh0EZ4/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Privacy policy</li>
            </a>
          </ul>
        </div>

        <div className={classes.col}>
          <h2>Follow us on</h2>
          <div className={classes.socialIcons}>
            <a
              href="https://www.instagram.com/tharangjyothi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={classes.icons} icon={faInstagram} />
            </a>
            <a
              href="https://www.youtube.com/@JyothiEngineeringCollege"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={classes.icons} icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
      <hr className={classes.hr} />
      <p className={classes.copyright}>
        Tharang'23 | Copyright &#169; All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
