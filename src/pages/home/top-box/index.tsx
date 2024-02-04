import classes from "./styles.module.css";

const TopBox = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>Making an impact</div>

      <div className={classes.body}>
        <div>
          Setting up in December 2023, <strong>Ivory Technology</strong> is a
          new start-up with a lifetime of experience in building large scale
          cloud hosted applications. Our company is driven by a commitment to
          making an impact in both the private and public sector through
          innovation, efficiency, and unwavering dedication to providing optimal
          software solutions.
        </div>
      </div>
    </div>
  );
};

export default TopBox;
