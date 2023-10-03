import classes from "./Ambassadar.module.css";
// import Mobile from "./Mobile.svg";
import Form from "./Form/Form";

import { useState } from "react";
import Background from "../../UI/Background";

const Ambassadar = () => {
   const [open, setOpen] = useState(false);

   return (
      <section id="ambassador" className={classes.ambaSection}>
         <Background className={classes.ambassadar}>
            <div className={classes.headingBox}>
               <h3 className={classes.heading}>Tharang 2023 Sponsers</h3>
               <p className={classes.para}> Intrainz </p>
               <p className={classes.para}> Orion study abroad </p>
               <p className={classes.para}> Orange interiors </p>
               <p className={classes.para}> Cadd centre thrissur </p>
               <p className={classes.para}> Radio mango </p>
               <p className={classes.para}> Style partner tres beau </p>
               {/* <button className={classes.btn} onClick={() => setOpen(!open)}>
            Register Now !
          </button> */}
            </div>
            <div className={classes.imgBox}>
               <img
                  className={classes.img}
                  src="assets/Ambassador/Mobile.svg"
                  alt="Ambassador"
               />
            </div>
         </Background>

         {open && <Form open={open} onClick={() => setOpen(!open)} />}
      </section>
   );
};

export default Ambassadar;
