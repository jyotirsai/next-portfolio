import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  text: {
    color: "white",
    display: "inline-block",
  },
});

export default function Terminal() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography display="block" variant="body1" className={classes.text}>
        Hello! I'm Jyotir.
      </Typography>
      <Typography display="block" variant="body1" className={classes.text}>
        A mechanical engineering student and self-taught programmer.
      </Typography>
    </div>
  );
}
