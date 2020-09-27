import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.astronautImg}></div>
        <h1>Hello</h1>
      </div>
    </div>
  );
}
