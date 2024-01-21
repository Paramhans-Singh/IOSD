import classes from "../styles/SideTitle.module.css";

const SideTitle = ({ title }) => {
  const titleArray = title.split("");
  console.log(titleArray);

  return (
    <div className={classes.container}>
      {titleArray.map((letter, i) => (
        <p key={i} className={classes.letter}>
          {letter}
        </p>
      ))}
    </div>
  );
};

export default SideTitle;
