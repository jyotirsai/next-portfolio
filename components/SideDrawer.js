import { useState } from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  Button,
  Box,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";

const useStyles = makeStyles({
  drawer: {
    display: "flex",
    alignItems: "baselines",
    justifyContent: "flex-end",
    flexGrow: 1,
    marginRight: 0,
    backgroundColor: "#181818",
  },
  button: {
    color: "white",
    "&:hover": {
      color: "cyan",
    },
  },
  list: {
    maxWidth: 250,
    width: "100%",
    margin: "0 auto",
    textAlign: "left",
  },
});

const SideDrawer = ({ items }) => {
  const classes = useStyles();
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ [anchor]: open });
  };

  const sideDrawerList = (anchor) => (
    <Box
      className={classes.drawer}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav" className={classes.list}>
        {items.map((item) => (
          <Link href={item.navPath} key={item.navText}>
            <ListItem className={classes.listItem}>
              <Button className={classes.button}>{item.navText}</Button>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        edge="end"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
        color="inherit"
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onOpen={toggleDrawer("right", true)}
        onClose={toggleDrawer("right", false)}
      >
        {sideDrawerList("right")}
      </Drawer>
    </>
  );
};

export default SideDrawer;
