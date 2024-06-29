import { ReactNode } from "react";
import classes from "./styles.module.css";

interface Props {
  icon: ReactNode;
  title: string;
}

const ServiceContainer = (props: Props) => {
  const { icon, title } = props;

  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>{icon}</div>

      <div className={classes.title}>{title}</div>
    </div>
  );
};

export default ServiceContainer;
