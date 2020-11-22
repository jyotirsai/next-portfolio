import Link from "next/link";
import { Toolbar, List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: "1",
  },
  text: {
    color: "white",
    display: "block",
  },
  toolbar: {
    display: "flex",
    direction: "column",
    justifyContent: "center",
    textAlign: "center",
    height: "95vh",
  },
});

export default function Intro() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Toolbar className={classes.toolbar}>
        <List>
          <ListItem button>
            <Link href="/about">
              <a>About</a>
            </Link>
          </ListItem>
          <ListItem button>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </ListItem>
          <ListItem button>
            <Link href="/projects">
              <a>Projects </a>
            </Link>
          </ListItem>
        </List>
      </Toolbar>
    </div>
  );
}
