import classes from "./styles.module.css";

interface Props {
  name: string;
  imgUrl: string;
  text: string;
}

const Container = (props: Props) => {
  const { name, imgUrl, text } = props;

  return (
    <>
      <div className={classes.containerDesktop}>
        <img src={imgUrl} className={classes.image} />
        <div>
          <h3>{name}</h3>
          <div>{text}</div>
        </div>
      </div>

      <div className={classes.mobile}>
        <div className={classes.containerMobile}>
          <img src={imgUrl} className={classes.image} />
          <h3>{name}</h3>
        </div>
        <div className={classes.mobileText}>{text}</div>
      </div>
    </>
  );
};

export default Container;
