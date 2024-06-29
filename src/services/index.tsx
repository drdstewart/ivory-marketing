import classes from "./styles.module.css";
import {
  IoConstructOutline,
  IoCloudOutline,
  IoCodeOutline,
} from "react-icons/io5";
import ServiceContainer from "./service-container";

const Services = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contactSection")!;
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.services}>
      <div className={classes.innerServices}>
        <div className={classes.serviceContainers}>
          <ServiceContainer
            icon={<IoCodeOutline className={classes.icon} />}
            title={"Development"}
          />
          <ServiceContainer
            icon={<IoCloudOutline className={classes.icon} />}
            title={"Cloud Experts"}
          />

          <ServiceContainer
            icon={<IoConstructOutline className={classes.icon} />}
            title={"Maintenance"}
          />
        </div>

        <div className={classes.wideServicesText}>
          Wide range of services available
        </div>

        <div className={classes.transformingText}>
          Transforming ideas into digital solutions
        </div>

        <div className={classes.bodyText}>
          We specialise in delivering customised software solutions across
          various industries. With extensive experience in legal, medical, and
          most recently the energy sector, we ensure high-quality tailored
          services to meet your unique needs. Whether you require web
          development, mobile app creation, or complex system integrations, our
          expert team is equipped to bring your vision to life.
        </div>

        <button className={classes.button} onClick={scrollToContact}>
          Get In Contact
        </button>
      </div>
    </div>
  );
};

export default Services;
