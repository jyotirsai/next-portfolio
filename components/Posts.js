import {
  Card,
  Typography,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: "100%",
    backgroundColor: "#00264d",
    marginTop: 50,
  },
  blogTitle: {
    fontFamily: "Playfair Display",
    fontSize: "25px",
    color: "white",
    padding: "15px 0 0 0",
    height: "85px",
  },
  blogSubTitle: {
    color: "white",
    letterSpacing: "3px",
    fontWeight: "bold",
    fontSize: 11,
    display: "block",
  },
  blogType: {
    color: "white",
    letterSpacing: "2px",
    fontSize: 10,
    display: "block",
    paddingTop: "5px",
  },
  blogPreview: {
    color: "#E0E0E0",
  },
  readMore: {
    padding: "0 0 0 8px",
    color: "cyan",
  },
});

export default function Posts({ id, date, title, href }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography variant="caption" className={classes.blogSubTitle}>
            BLOG POST
          </Typography>
          <Typography variant="caption" className={classes.blogType}>
            WEB DEVELOPMENT
          </Typography>
          <Grid>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.blogTitle}
            >
              {title}
            </Typography>
          </Grid>
          <Typography variant="caption" className={classes.blogPreview}>
            blah
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={href}>
          <Button size="small" color="inherit" className={classes.readMore}>
            Read More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
