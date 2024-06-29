import classes from "./styles.module.css";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <div className={classes.contact} id="contactSection">
      <img src="/images/ele-cartoon.svg" className={classes.ele} />

      <div className={classes.content}>
        <div className={classes.innerContent}>
          <div className={classes.title}>We would love to hear from you</div>
          <div className={classes.body}>
            Want to get in touch? Whether you have a question about our
            services, need a consultation, or just want to say hello, we're here
            to help!
          </div>

          <div className={classes.methodContainer}>
            <div className={classes.iconContainer}>
              <TfiEmail />
            </div>
            <a href="mailto:info@ivorytech.co.uk" className={classes.email}>
              info@ivorytech.co.uk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
