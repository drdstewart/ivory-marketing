import AnimationWrapper from "../../core/animation-wrapper";
import DarkBox from "../../core/dark-box";
import TopBox from "./top-box";

const HomePage = () => {
  return (
    <AnimationWrapper>
      <TopBox />
      <br />
      <DarkBox
        title={"EXPERTS IN TECHNOLOGY"}
        body={`With a core focus on technology, our company brings a depth of
          expertise that drives innovation and efficiency. Our team of tech
          deliver cutting-edge solutions tailored to meet the evolving needs of
          professionals is adept at harnessing the latest advancements to
          the public sector.`}
        image={"/images/laptop.png"}
        direction={"textLeft"}
      />
      <br />
      <br />
      <br />
      <DarkBox
        title={"Industry spanning experience"}
        body={`Despite being a new entrant, our developers bring extensive experience
          across a span of various industries, including the legal, energy,
          medical, and finance markets.`}
        image={"/images/solar.avif"}
        direction={"textRight"}
      />
      <br />
      <br />
    </AnimationWrapper>
  );
};

export default HomePage;
