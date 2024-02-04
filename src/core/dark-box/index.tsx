import classes from "./styles.module.css";

interface Props {
  title: string;
  body: string;
  image: string;
  direction: "textLeft" | "textRight";
}

const DarkBox = (props: Props) => {
  const { direction, title, body, image } = props;

  if (direction == "textLeft") {
    return (
      <div className={classes.containerLeft}>
        <div className={classes.body}>
          <div className={classes.title}>{title}</div>
          <div>{body}</div>
        </div>
        <img className={classes.imageLeft} src={image} />
        <div className={classes.imageContainerLeft} />
      </div>
    );
  }

  return (
    <div className={classes.containerRight}>
      <img className={classes.imageRight} src={image} />
      <div className={classes.imageContainerRight} />

      <div className={classes.body}>
        <div className={classes.title}>{title}</div>
        <div>{body}</div>
      </div>
    </div>
  );
};

export default DarkBox;
