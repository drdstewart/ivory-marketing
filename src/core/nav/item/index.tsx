import { NavLink } from "react-router-dom";
import classes from "./styles.module.css";

interface Props {
  route: string;
  name: string;
}

const NavButton = (props: Props) => {
  const { route, name } = props;

  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        classes.default + " " + (isActive ? classes.active : classes.notActive)
      }
    >
      {name}
    </NavLink>
  );
};

export default NavButton;
