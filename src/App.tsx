import classes from "./styles.module.css";

function App() {
  return (
    <div>
      <div className={classes.homeContainer}>
        <div className={classes.eleContainer}>
          <img src={"/images/ele.jpg"} alt="Image" className={classes.ele} />
          <div className={classes.circularGradient} />
        </div>
        <div className={classes.mainText}>
          <h1>Revolutionising public procurement</h1>
          <div>
            Harness the transformative power of technology and strategic
            expertise with Ivory Technology, the game-changer in public sector
            tendering. We are a new start but with a lifetime of experience in
            building large scale cloud hosted applications. While we are yet to
            establish ourselves, our development team has experience in the
            legal, medical, finance and energy industries, as well as some time
            working in hte public sector.
          </div>
          <br />
          <div>
            Get in contact:{" "}
            <a href="info@ivorytech.co.uk" className={classes.link}>
              info@ivorytech.co.uk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
