import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  List,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SideDrawer from "./SideDrawer";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#181818",
  },
  toolbar: {
    margin: "0 auto",
    maxWidth: "900px",
    width: "100%",
    display: "flex",
  },
  blogTitleText: {
    textAlign: "center",
  },
  menu: {
    color: "white",
  },
  active: {
    textDecoration: "underline",
  },
  list: {
    display: "flex",
    alignItems: "baselines",
    justifyContent: "flex-end",
    flexGrow: 1,
  },
  button: {
    color: "white",
    "&:hover": {
      color: "cyan",
    },
  },
});

export default function Header(props) {
  const classes = useStyles();

  const items = [
    {
      navText: "Home",
      navPath: "/",
    },
    {
      navText: "Blog",
      navPath: "/blog",
    },
    {
      navText: "Projects",
      navPath: "/projects",
    },
  ];

  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">Jyotir Sai</Typography>
        <List className={classes.list}>
          <Hidden smDown>
            {items.map((item, key) => (
              <Link href={item.navPath}>
                <Button className={classes.button} key={key}>
                  {item.navText}
                </Button>
              </Link>
            ))}
          </Hidden>
        </List>
        <Hidden mdUp>
          <SideDrawer items={items} />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
