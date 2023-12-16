import AnimationWrapper from "../../core/animation-wrapper";
import classes from "./styles.module.css";

const ServicesPage = () => {
  return (
    <AnimationWrapper>
      <div className={classes.top}>
        <h1>What sort of services are on offer?</h1>
        <div className={classes.intro}>
          We at Ivory Tech are currently looking for all small scale public
          sector software development tenders.
        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.box}>
          <img src="/images/cloud.jpeg" className={classes.image} />
          <div className={classes.title}>
            <h3>Cloud Architecture</h3>
          </div>
          <div className={classes.body}>
            We specialize in crafting tailored solutions for scalability and
            agility. Our expert team ensures robust and secure cloud
            infrastructures, seamless migrations, and optimized systems across
            environments. Experience a future where data is dynamically
            utilized, applications effortlessly scale, and technology empowers
            growth.
          </div>
        </div>

        <div className={classes.box}>
          <img src="/images/app.avif" className={classes.image} />
          <div className={classes.title}>
            <h3>Application Development </h3>
          </div>
          <div className={classes.body}>
            Whether it's a compelling web presence or a powerful mobile app, our
            our tailored made solutions will suit your unique needs. From
            intuitive interfaces to robust back-end systems, we specialize in
            bringing your vision to life, bridging the digital gap with seamless
            applications.
          </div>
        </div>

        <div className={classes.box}>
          <img src="/images/design.jpeg" className={classes.image} />
          <div className={classes.title}>
            <h3>Frontend Design </h3>
          </div>
          <div className={classes.body}>
            Out innovation and aesthetics converge to redefine digital
            experiences through our Frontend Design expertise. Our dedicated
            team excels in crafting visually captivating designs. Meticulous
            layouts and fluid navigation are our specialties, bringing your
            vision to life with a touch of artistry.
          </div>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default ServicesPage;
