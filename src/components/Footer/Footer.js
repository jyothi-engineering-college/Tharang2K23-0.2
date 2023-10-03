import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faFacebook,
   faInstagram,
   faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { HashLink } from "react-router-hash-link";
import Logo from "./header_logo.png";

const Footer = () => {
   return (
      <footer className={classes.footer}>
         <div className={classes.row}>
            <div className={classes.col}>
               <img className={classes.karma} src={Logo} alt="Tarang logo" />
               <p className={classes.para}>
                  Tharang is a largest Techno Cultural Fest conducted annually by the students of Jyothi Engineering College, Thrissur. Tharang, since its inception, has evolved into one of the biggest events for tech-wits and creative minds across the state. The new edition "Tharang 2023" is not different either. The fest brings together the latest in technology, automobiles, workshop, games, arts, dance and music, all inside a jam packed session of two days, march 31st and apri 1st.
               </p>
            </div>

            <div className={classes.col}>
               <h3>Contact us</h3>
               <p>Jyothi Engineering College, Cheruthuruthy</p>
               <p>Cheruthuruthy - P.O</p>
               <p>Kerala 679531</p>
               <p className={classes.email}>info@jecc.ac.in</p>
               <p className={classes.contactNo}>04884 - 259000</p>
               <p className={classes.contactNo}>04884 - 274423</p>
            </div>

            <div className={`${classes.col} ${classes.links}`}>
               <h3>Links</h3>
               <ul>
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

                  {/* <a
              href="https://docs.google.com/document/d/1VOnAodNTeF8ShOCxxVb_AXnxLKg2jKZCUY0QxbQd4nE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Terms and condition</li>
            </a> */}

                  {/* <a
              href="https://docs.google.com/document/d/1K0En27BTf6KJB2eHZmnr7BAMDWK8T83--8HJOu-GkA0/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Refund & Cancellation Policy</li>
            </a> */}
                  {/* <a
              href="https://docs.google.com/document/d/1DVGB-PePPd7XCNW4LAJ6qBShudKzBJtuaAaiC6Q1DWY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <li>Shipping Policy</li>
            </a> */}
               </ul>
            </div>

            <div className={classes.col}>
               <h3>Follow us on</h3>
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
                  {/* <a
              href="https://www.facebook.com/karma.kmct/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={classes.icons} icon={faFacebook} />
            </a> */}
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
