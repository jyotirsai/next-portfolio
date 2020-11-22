import React from "react";
import Link from "next/link";
import { Typography, Paper, Button, Grid } from "@material-ui/core";
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
  grid: {
    marginTop: 12.5,
  },
  buttonGrid: {
    margin: "0px 5px",
  },
  button: {
    color: "cyan",
    border: "1px solid #888888",
  },
});

export default function About() {
  const classes = useStyles();
  return (
    <Paper className={classes.box}>
      <Typography className={classes.text} variant="h3" color="inherit">
        Jyotir Sai
      </Typography>
      <Typography className={classes.text} variant="subtitle2">
        Hi, I'm an engineering student at the University of Alberta.
      </Typography>
      <Grid container justify="center" className={classes.grid}>
        <Grid item className={classes.buttonGrid}>
          <Link href="/blog">
            <Button variant="outlined" className={classes.button}>
              Blog
            </Button>
          </Link>
        </Grid>
        <Grid item className={classes.buttonGrid}>
          <Link href="/projects">
            <Button variant="outlined" className={classes.button}>
              Projects
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
}
