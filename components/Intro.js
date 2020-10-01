import { Toolbar, Link, List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";
import Typed from "react-typed";

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
            <Link>About</Link>
          </ListItem>
          <ListItem button>
            <Link>Blog</Link>
          </ListItem>
          <ListItem button>
            <Link>Projects</Link>
          </ListItem>
        </List>
      </Toolbar>
    </div>
  );
}
