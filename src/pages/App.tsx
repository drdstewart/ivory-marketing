import { Outlet } from "react-router-dom";
import NavBar from "../core/nav";
import classes from "./styles.module.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className={classes.outlet}>
        <div className={classes.innerOutlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
