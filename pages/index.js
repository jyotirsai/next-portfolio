import Head from "next/head";
import styles from "../styles/Home.module.css";
import Terminal from "../components/Terminal";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jyotir's Portfolio</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.astronautImg}>
          <Terminal />
        </div>
      </div>
    </div>
  );
}
