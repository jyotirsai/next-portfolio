import Head from "next/head";
import styles from "../styles/Home.module.css";
import Terminal from "../components/Terminal";
import Particles from "../components/Particles";

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
        <Particles />
      </div>
    </div>
  );
}
