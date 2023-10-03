import { Link } from "react-router-dom";
import classes from "./Dropdown.module.css";

const Dropdown = (props) => {
  return (
    <ul className={classes.dropdown}>
      {/* <li className={classes.drops}><Link to="/events/cultural" onClick={props.click} className={classes.links}>Culturals</Link></li> */}
      <li className={classes.drops}><Link to="/events/AD" onClick={props.click} className={classes.links}>AD</Link></li>
      <li className={classes.drops}><Link to="/events/BSH" onClick={props.click} className={classes.links}>BSH</Link></li>
      <li className={classes.drops}><Link to="/events/CE" onClick={props.click} className={classes.links}>CE</Link></li>
      <li className={classes.drops}><Link to="/events/CSE" onClick={props.click} className={classes.links}>CSE</Link></li>
      <li className={classes.drops}><Link to="/events/ECE" onClick={props.click} className={classes.links}>ECE</Link></li>
      <li className={classes.drops}><Link to="/events/EEE" onClick={props.click} className={classes.links}>EEE</Link></li>
      <li className={classes.drops}><Link to="/events/ME" onClick={props.click} className={classes.links}>ME</Link></li>
      <li className={classes.drops}><Link to="/events/MR" onClick={props.click} className={classes.links}>MR</Link></li>
      <li className={classes.drops}><Link to="/events/RA" onClick={props.click} className={classes.links}>RA</Link></li>
            {/* <li className={classes.drops}><Link to="/events/technical" onClick={props.click} className={classes.links}>Workshops</Link></li>
            <li className={classes.drops}><Link to="/events/games" onClick={props.click} className={classes.links}>Games</Link></li>
            <li className={classes.drops}><Link to="/events/hackathon" onClick={props.click} className={classes.links}>Hackathon</Link></li>
            <li className={classes.drops}><Link to="/events/talk" onClick={props.click} className={classes.links}>Expert Talk</Link></li> */}
    </ul>
  );
};

export default Dropdown;
