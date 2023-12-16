import AnimationWrapper from "../../core/animation-wrapper";
import Container from "./container";
import classes from "./styles.module.css";

const HomePage = () => {
  return (
    <AnimationWrapper>
      <div className={classes.top}>
        <h1>Revolutionising public procurement</h1>
        <div className={classes.intro}>
          Harness the transformative power of technology and strategic expertise
          with Ivory Technology, the game-changer in public sector tendering.
        </div>
      </div>

      <Container
        name={"Making an impact"}
        imgUrl={"/images/ele.jpg"}
        text={
          "Ivory Tech is a new start-up with a lifetime of experience in building large scale cloud hosted applications. Our company is driven by a commitment to making an impact in the public sector through innovation, efficiency, and unwavering dedication to public service."
        }
      />
      <Container
        name={"Expertise in technology"}
        imgUrl={"/images/code.webp"}
        text={
          "With a core focus on technology, our company brings a depth of expertise that drives innovation and efficiency. Our team of tech professionals is adept at harnessing the latest advancements to deliver cutting-edge solutions tailored to meet the evolving needs of the public sector."
        }
      />
      <Container
        name={"Industry spanning experience"}
        imgUrl={"/images/wind.jpeg"}
        text={
          "Despite being a new entrant, our developers bring extensive experience across a span of various industries, including the legal, energy, medical, and finance markets."
        }
      />
    </AnimationWrapper>
  );
};

export default HomePage;
