import AnimationWrapper from "../../core/animation-wrapper";
import DarkBox from "../../core/dark-box";
import classes from "./styles.module.css";

const ServicesPage = () => {
  return (
    <AnimationWrapper>
      <div className={classes.container}>
        <div className={classes.title}>What we do</div>

        <div className={classes.body}>
          <div>
            We specialise in delivering cutting-edge software solutions for both
            public and private sectors in the UK. Although we are a new entrant,
            our team is packed with skills across a range of technologies to
            help guide you through all stages of a projects life cycle.
          </div>
        </div>
      </div>

      <DarkBox
        title={"Design"}
        body={`From simple conversations we can extract requirements that allow
              us to build fluid, responsive designs. We use industry standard
              software to produce our visualisations on how we think your
              software should look and feel. We can also produce rapid,
              interactive proof of concept designs to give you an idea of a
              direction we might want to take.`}
        image={"/images/design.avif"}
        direction={"textLeft"}
      />
      <br />
      <br />
      <br />
      <DarkBox
        title={"Development"}
        body={`Whether it's a compelling web presence or a powerful mobile app,
        our our tailored made solutions will suit your unique needs. From
        intuitive interfaces to robust back-end systems, we have all the
        skills needed to bring you vision to life.`}
        image={"/images/app.avif"}
        direction={"textRight"}
      />
      <br />
      <br />
      <br />

      <DarkBox
        title={"Cloud "}
        body={`Our cloud solutions are built for scalability and agility. Our
        expert team ensures robust and secure cloud infrastructures,
        seamless migrations, and optimised systems across environments.
        Experience a future where data is dynamically utilized,
        applications effortlessly scale, and technology empowers growth.`}
        image={"/images/cloud.webp"}
        direction={"textLeft"}
      />
      <br />
      <br />
    </AnimationWrapper>
  );
};

export default ServicesPage;
