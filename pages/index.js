import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.astronautImg}>
          <h1>Hello World</h1>
        </div>
      </div>
    </div>
  );
}
