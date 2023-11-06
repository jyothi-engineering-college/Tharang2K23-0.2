import React from 'react';
import classes from './bg.module.css'; // Make sure to provide the correct path to your CSS module

const BackgroundVideo = () => {
  return (
    <video autoPlay loop muted className={classes.videoBackground}>
      <source src="/assets/Hero/t.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
