import Link from "next/link";
import { AppBar, Toolbar, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  header: {
    backgroundColor: " #00172d",
  },
  blogTitleText: {
    textAlign: "center",
  },
  menu: {
    color: "white",
  },
  active: {
    color: "cyan",
  },
});

export default function Header(props) {
  const classes = useStyles();
  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <Grid container>
          <Link href="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="/blog">
            <Button
              color="inherit"
              className={props.blog ? classes.active : ""}
            >
              Blog
            </Button>
          </Link>
          <Link href="/projects">
            <Button
              color="inherit"
              className={props.projects ? classes.active : ""}
            >
              Projects
            </Button>
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
