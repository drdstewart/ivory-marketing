import classes from "./styles.module.css";
import { TfiEmail } from "react-icons/tfi";
import Triangle from "./triangle ";
import { FiPhoneCall, FiMail, FiGithub } from "react-icons/fi";
import AnimationWrapper from "../../core/animation-wrapper";

const ContactPage = () => {
  return (
    <>
      <AnimationWrapper>
        <div className={classes.top}>
          <h1>Want to get in contact?</h1>
          <div className={classes.intro}>
            Curious about out services or would like to collaborate? We would
            love to hear form you.
          </div>
        </div>

        <div className={classes.contact}>
          <div>
            <div className={classes.methodContainer}>
              <div className={classes.iconContainer}>
                <TfiEmail />
              </div>
              <a href="mailto:info@ivorytech.co.uk" className={classes.email}>
                info@ivorytech.co.uk
              </a>
            </div>

            <div className={classes.methodContainer}>
              <div className={classes.iconContainer}>
                <FiPhoneCall />
              </div>
              <a href="tel:07923029945" className={classes.email}>
                +447923029945
              </a>
            </div>
          </div>
          <div className={classes.mobileTri}>
            <Triangle numRows={15} />
          </div>

          <div className={classes.desktopTri}>
            <Triangle numRows={25} />
          </div>
        </div>
      </AnimationWrapper>
    </>
  );
};

export default ContactPage;
