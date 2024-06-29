import classes from "./styles.module.css";

const TopBar = () => {
  return (
    <div className={classes.container}>
      <img className={classes.logo} src="/images/logo.svg" />
    </div>
  );
};

export default TopBar;
