import { NavLink } from "react-router-dom";
import classes from "./styles.module.css";

interface Props {
  route: string;
  name: string;
  onClose: () => void;
}

const NavButton = (props: Props) => {
  const { route, name, onClose } = props;

  return (
    <li>
      <NavLink
        to={route}
        className={({ isActive }) =>
          classes.default +
          " " +
          (isActive ? classes.active : classes.notActive)
        }
        onClick={onClose}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default NavButton;
