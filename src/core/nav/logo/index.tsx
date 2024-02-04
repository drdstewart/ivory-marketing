import { useNavigate } from "react-router";
import classes from "./styles.module.css";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <button className={classes.logo} onClick={() => navigate("/")}>
      <img src="/images/ele.svg" className={classes.ele} />
      <div className={classes.text}>ivoryTech</div>
    </button>
  );
};

export default Logo;
