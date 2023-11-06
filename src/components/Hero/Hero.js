import React, { useState, useEffect, useRef } from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  const [countDays, setDays] = useState(false);
  const [countHours, setHours] = useState(false);
  const [countMinutes, setMinutes] = useState(false);
  const [countSeconds, setSeconds] = useState(false);

   let interval = useRef();

   const startTimer = () => {
     const countdownDate = new Date("Nov 10 2023 08:00:00").getTime();

     interval = setInterval(() => {
       const now = new Date().getTime();
       const distance = countdownDate - now;

       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
       const hours = Math.floor(
         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
       );
       const minutes = Math.floor((distance / 1000 / 60) % 60);
       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

       if (distance < 0) {
         clearInterval(interval);
     } else {
     setDays(days);
     setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }
  }, 1000);
  };

  useEffect(() => {
     startTimer();
  return () => {
  clearInterval(interval);
   };
   });
   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); // or any other width threshold you prefer for mobile vs desktop

   const updateMedia = () => {
     setIsDesktop(window.innerWidth >= 768);
   };
 
   useEffect(() => {
     window.addEventListener('resize', updateMedia);
     return () => window.removeEventListener('resize', updateMedia);
   }, []);
 
   return (
     <section id="home" className={classes.hero}>
      <video autoPlay loop muted className={classes.videoBackground}>
        <source
          src={isDesktop ? "/assets/Hero/t.mp4" : "/assets/Hero/t2.mp4"}
          type="video/mp4"
        />
      </video>
      <div className={classes.herobox}>
        <div className={classes.headerbox}>
          <center>
          <h1 className={classes.heading}>
        <span className={classes.tharang}>THARANG</span>
        <span className={classes.heading2023}>'23</span>{" "}
        <span className={classes.heading2023}>2.0</span>{" "}
      </h1>
          </center>
          <h4 className={classes.caption}>
            Where creativity meets innovation.
          </h4>
          <p className={classes.date}>Nov 10 & 11, 2023</p>
          <br />
          
        </div>
        <br />

        {
          <div className={classes.countdownbox}>
            <div className={classes.countdown}>
              <p>{countDays}</p>
              <p>
                <small>days</small>
              </p>
            </div>

            <span className={classes.column}>:</span>

            <div className={classes.countdown}>
              <p>{countHours}</p>
              <p>hours</p>
            </div>

            <span className={classes.column}>:</span>

            <div className={classes.countdown}>
              <p>{countMinutes}</p>
              <p>min</p>
            </div>

            <span className={classes.column}>:</span>
            <div className={classes.countdown}>
              <p>{countSeconds}</p>
              <p>sec</p>
            </div>
          </div>
        }
      </div>
    </section>
  );

};

export default Hero;
