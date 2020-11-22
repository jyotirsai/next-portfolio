import React from "react";
import { Typography, Paper, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  text: {
    color: "white",
  },
  box: {
    margin: "0 auto",
    //border: "0.1px solid black",
    padding: "20px",
    textAlign: "center",
    minWidth: "350px",
    position: "absolute",
    top: "47.5%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(46,49,49,0.8)",
  },
});

export default function Loading() {
  const classes = useStyles();
  return (
    <Paper className={classes.box}>
      <Typography className={classes.text} variant="h3" color="inherit">
        Jyotir Sai
      </Typography>
      <Typography className={classes.text} variant="subtitle2">
        Hi, I'm an engineering student at the University of Alberta.
      </Typography>
    </Paper>
  );
}
