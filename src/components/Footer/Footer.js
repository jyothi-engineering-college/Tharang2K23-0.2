import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      
      <div className={classes.socialIcons}>
        <a href="https://www.instagram.com/tharangjyothi/" target="_blank" rel="noopener noreferrer" title="Did you know? Our Instagram has behind-the-scenes content!">
          <FontAwesomeIcon className={classes.icons} icon={faInstagram} />
        </a>
        <a href="https://www.youtube.com/@JyothiEngineeringCollege" target="_blank" rel="noopener noreferrer" title="Trivia: Our first YouTube video reached 10K views in a week!">
          <FontAwesomeIcon className={classes.icons} icon={faYoutube} />
        </a>
      </div>

      <div className={classes.col}>
        <HashLink to="/#about">About</HashLink>
        <HashLink to="/#contact">Contact us</HashLink>
        <a href="https://example.com/privacy" target="_blank" rel="noopener noreferrer">Privacy policy</a>
      </div>

      <p className={classes.copyright}>
        Tharang'23 | Copyright &#169; All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
