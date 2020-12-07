import Link from "next/link";
import { getSortedPosts } from "../../lib/posts";
import Head from "next/head";
import styles from "../../styles/Blog.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  titleText: {
    color: "#E0E0E0",
    textAlign: "center",
  },
  post: {
    margin: "10px 0",
    padding: "10px 10px 0px 10px",
    backgroundColor: "#001e3b",
    color: "#E0E0E0",
  },
  button: {
    color: "cyan",
    marginLeft: 2,
  },
  posts: {
    width: "100%",
    maxWidth: "1200px",
    margin: "20px auto",
  },
  date: {
    color: "#888888",
  },
  excerpt: {
    marginTop: 8,
  },
});

export default function BlogIndex({ allPostsData }) {
  const classes = useStyles();
  let blog = true;
  let projects = false;
  return (
    <>
      <Head>
        <title>Jyotir's blog</title>
      </Head>
      <div className={styles.container}>
        <Header blog={blog} projects={projects} />
        <div className={styles.main}>
          <Typography variant="h1" className={classes.titleText}>
            Blog.
          </Typography>
          <Grid
            container
            justify="space-evenly"
            direction="column"
            className={classes.posts}
          >
            {allPostsData.map(({ slug, date, title, excerpt }) => (
              <Card key={slug} className={classes.post} raised>
                <CardContent>
                  <Typography variant="h4">{title}</Typography>
                  <Typography variant="body1" className={classes.date}>
                    {date}
                  </Typography>
                  <Typography variant="body2" className={classes.excerpt}>
                    {excerpt}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>
                    <Button
                      className={classes.button}
                      size="small"
                      disableElevation
                    >
                      READ MORE
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPosts();
  return {
    props: {
      allPostsData,
    },
  };
}
