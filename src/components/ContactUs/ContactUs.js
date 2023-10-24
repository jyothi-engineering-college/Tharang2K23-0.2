import Faq from "../Faq/Faq";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <section id="contact" className={classes.contact}>
      <div className={classes.contactBox}>
        <div className={classes.contentBox}>

            <Faq />
          
          <div className={classes.mapBox}>
            <iframe
              className={classes.map}
              title="Jyothi Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.090335508201!2d76.28777251480035!3d10.727515692354698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7dcdc5d78c9a1%3A0x37f9c68d4eb72174!2sJyothi%20Engineering%20College%2C%20Cheruthuruthy%2C%20Thrissur!5e0!3m2!1sen!2sin!4v1680099873300!5m2!1sen!2sin"
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
