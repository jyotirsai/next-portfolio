import Head from "next/head";
import styles from "../styles/Projects.module.css";
import Header from "../components/Header";

export default function Blog() {
  let blog = false;
  let projects = true;
  return (
    <div>
      <Head>
        <title>Jyotir's projects</title>
      </Head>
      <div className={styles.container}>
        <Header blog={blog} projects={projects} />
      </div>
    </div>
  );
}
