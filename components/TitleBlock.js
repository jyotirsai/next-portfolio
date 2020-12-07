import React from "react";
import { Typography, Link, Grid } from "@material-ui/core";
import Date from "./date";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  subtitle: {
    color: "#888888",
  },
});

const TitleBlock = ({ title, author, date }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3" align="center">
        {title}
      </Typography>
      <hr style={{ border: "0.1px solid cyan" }} />
      <Grid fullWidth container justify="space-between" alignItems="baseline">
        <Grid item>
          <Typography variant="subtitle1" className={classes.subtitle}>
            <Date dateString={date} />
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" className={classes.subtitle}>
            {author}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default TitleBlock;
