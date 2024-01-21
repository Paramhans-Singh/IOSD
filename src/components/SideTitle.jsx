import classes from "../styles/SideTitle.module.css";

const SideTitle = ({ title }) => {
  const titleArray = title.split("");
  console.log(titleArray);

  return (
    <div className={classes.container}>
      {titleArray.map((letter, i) => (
        <h3 key={i} className={classes.letter}>
          {letter}
        </h3>
      ))}
    </div>
  );
};

export default SideTitle;
