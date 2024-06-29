import RotatingText from "./rotating";
import classes from "./styles.module.css";

const About = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contactSection")!;
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.about}>
      <div className={classes.content}>
        <div className={classes.innerContent}>
          <div className={classes.title}>
            Empowering Your Business With <RotatingText /> Custom Software
            Solutions
          </div>
          <div className={classes.subtitle}>
            Setting up in December 2023, Ivory Technology is a new start-up with
            a lifetime of experience in building and maintaining large scale
            cloud hosted applications.
          </div>

          <div>
            <button className={classes.button} onClick={scrollToContact}>
              Get In Contact
            </button>
          </div>
        </div>
      </div>

      <img
        src="/images/fractal-ele.svg"
        className={classes.fractalEle}
        alt="Fractal Elephant"
      />
    </div>
  );
};

export default About;
