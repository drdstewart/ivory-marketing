import classes from "./styles.module.css";

interface Props {
  numRows: number;
}

const Triangle = (props: Props) => {
  const { numRows } = props;

  const rows = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      row.push(<div className={classes.circle} key={j}></div>);
    }
    rows.push(
      <div className={classes.row} key={i}>
        {row}
      </div>
    );
  }

  return <div className={classes.container}>{rows}</div>;
};

export default Triangle;
