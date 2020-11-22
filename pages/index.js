import Head from "next/head";
import styles from "../styles/Home.module.css";
import Intro from "../components/Intro";
import Particles from "../components/Particles";
import Loading from "../components/Loading"
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jyotir's Portfolio</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.astronautImg}>
          <Loading />
        </div>
        <Particles />
      </div>
    </div>
  );
}
