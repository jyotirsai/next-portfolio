import Head from "next/head";
import styles from "../styles/Blog.module.css";
import Header from "../components/Header";

export default function Blog() {
  let blog = true;
  let projects = false;
  return (
    <div>
      <Head>
        <title>Jyotir's blog</title>
      </Head>
      <div className={styles.container}>
        <Header blog={blog} projects={projects} />
      </div>
    </div>
  );
}
