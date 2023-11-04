import { useParams } from "react-router-dom";
import classes from "./BshDetail.module.css";
import Background from "../../UI/Background";
import BshLists from "./BshLists";
import { useEffect } from "react";

const BshDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();
  const culturalDetail = BshLists.filter(
    (event) => params.id === event.name
  )[0];

  return (
    <section className={classes.ambaSection}>
      <Background className={classes.ambassadar}>
        <div className={classes.tech}>
          <div className={classes.imgBox}>
            <img
              className={classes.img}
              src={culturalDetail.imgSrc}
              alt="Desafio"
            />
          </div>
          <div className={classes.scrollBox}>
            <div className={classes.headingBox}>
              <h3 className={classes.heading}>{culturalDetail.heading}</h3>
              <p className={classes.para}>{culturalDetail.desc}</p>
              
              {[culturalDetail.rule1, culturalDetail.rule2, culturalDetail.rule3].map((rule, idx) => (
                rule ? <p key={idx} className={classes.para}>{rule}</p> : null
              ))}
              <p className={classes.fees}>
                Registration fees :
                <span className={classes.amount}> {culturalDetail.regFee}</span>
              </p>
              <p className={classes.cont}>Contact - {culturalDetail.contact}</p>
            </div>
          </div>
        </div>
      </Background>
    </section>
  );
};

export default BshDetail;
