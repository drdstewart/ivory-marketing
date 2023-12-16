import classes from "./styles.module.css";

const Logo = () => {
  return (
    <button className={classes.logo}>
      <img src="/images/ele.svg" className={classes.ele} />
      <div className={classes.text}>ivoryTech</div>
    </button>
  );
};

export default Logo;
