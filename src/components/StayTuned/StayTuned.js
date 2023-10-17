import React from 'react';
import classes from './StayTuned.module.css';

const StayTuned = ({ title = "Stay Tuned!" }) => {
    return (
            <div className={classes.loader}>
            <div data-glitch={title} className={classes.glitch}>{title}</div>
            
        </div>
        
    );
}

export default StayTuned;
