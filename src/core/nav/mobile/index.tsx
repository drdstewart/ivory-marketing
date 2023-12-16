import { useState } from "react";
import classes from "./styles.module.css";
import NavButton from "./nav-button";
import { FiMenu, FiX } from "react-icons/fi";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const modalStyle = [classes.mobileNav];

  if (open) modalStyle.push(classes.open);

  return (
    <div className={classes.mobile}>
      <div>
        <button
          onClick={() => setOpen(true)}
          className={classes.hamburgerButton}
        >
          <FiMenu />
        </button>
      </div>
      <div className={modalStyle.join(" ")}>
        <div className={classes.top}>
          <h1>Menu</h1>
          <button
            className={classes.closeButton}
            onClick={() => setOpen(false)}
          >
            <FiX className={classes.xIcon} />
            Close
          </button>
        </div>
        <ul className={classes.routes}>
          <NavButton route="/" name="About Us" onClose={() => setOpen(false)} />
          <NavButton
            route="/services"
            name="Services"
            onClose={() => setOpen(false)}
          />
          <NavButton
            route="/contact"
            name="Contact"
            onClose={() => setOpen(false)}
          />
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
