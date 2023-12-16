import { ReactNode } from "react";
import classes from "./styles.module.css";

interface Props {
  children: ReactNode;
}

const AnimationWrapper = (props: Props) => {
  return <div className={classes.wrapper}>{props.children}</div>;
};

export default AnimationWrapper;
