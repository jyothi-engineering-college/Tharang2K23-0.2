import classes from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={classes.aboutSec}>
      <div className={classes.about}>
        <div className={classes.details}>
          <h3 className={classes.heading}>About</h3>
          <h2 className={classes.heading1}>Tharang 2023</h2>
          <p className={classes.para}>
          Tharang is a largest Techno Cultural Fest 
          conducted annually by the students of Jyothi Engineering
           College, Thrissur. Tharang, since its inception, has evolved
            into one of the biggest events for tech-wits and creative minds
             across the state. The new edition "Tharang 2023" is not different
              either. The fest brings together the latest in technology, 
              automobiles, workshop, games, arts, dance and music, 
              all inside a jam packed session of two days, march 31st
               and apri 1st.
          </p>

          <p className={classes.para}>
          Jyothi Engineering College (JEC) set up in 2002, 
          under the aegis of Thrissur Educational Trust, 
          founded by the Catholic Archdiocese of Trichur, 
          is a leading engineering college in Kerala. 
          The Archdiocese of Trichur has an illustrious track 
          record of a century and a quarter in the education sector. 
          Jyothi Engineering College is a NAAC accredited institution 
          and Five of the undergraduate programs offered have NBA accreditation, 
          which indicates that we are well recognized for the quality of education 
          we offer.
          </p>
        </div>

        <div className={classes.composition}>
          <img
            className={classes.images}
            src="assets/About/ellipse.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
