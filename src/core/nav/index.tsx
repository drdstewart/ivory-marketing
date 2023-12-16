import classes from "./styles.module.css";
import NavButton from "./item";
import Logo from "./logo";
import MobileNav from "./mobile";

const NavBar = () => {
  return (
    <div className={classes.navBar}>
      <Logo />

      <MobileNav />

      <div className={classes.listContainer}>
        <NavButton route={"/"} name={"About Us"} />
        <NavButton route={"/services"} name={"Services"} />
        <NavButton route={"/contact"} name={"Contact"} />
      </div>
    </div>
  );
};

export default NavBar;
