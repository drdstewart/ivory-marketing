import { ReactNode } from "react";
import classes from "./styles.module.css";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  onClick: () => void;
}

const ServiceContainer = (props: Props) => {
  const { icon, title, onClick } = props;

  return (
    <div className={classes.container} onClick={onClick}>
      <div className={classes.iconContainer}>{icon}</div>
      <div className={classes.title}>{title}</div>
      <div className={classes.clickHint}>Click to learn more</div>
    </div>
  );
};

export default ServiceContainer;
