import React from "react";
import Link from "next/link";
import { Typography, Paper, IconButton, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { LinkedIn, GitHub, Email } from "@material-ui/icons";

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
    color: "white",
    "&:hover": {
      color: "cyan",
    },
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
          <Link href="https://www.linkedin.com/in/jyotirsai/">
            <IconButton className={classes.button}>
              <LinkedIn />
            </IconButton>
          </Link>
        </Grid>
        <Grid item className={classes.buttonGrid}>
          <Link href="https://github.com/jyotirsai">
            <IconButton className={classes.button}>
              <GitHub />
            </IconButton>
          </Link>
        </Grid>
        <Grid item className={classes.buttonGrid}>
          <Link href="mailto:jyotirsai@gmail.com">
            <IconButton className={classes.button}>
              <Email />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
}
