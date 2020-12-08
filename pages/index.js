import Head from "next/head";
import styles from "../styles/Home.module.css";
import Particles from "../components/Particles";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollLock from "react-scrolllock";

export default function Home() {
  return (
    <div>
      <Head>
        <title>jyotirsai.com</title>
      </Head>
      <ScrollLock>
        <div className={styles.container}>
          <Header />
          <div className={styles.astronautImg}>
            <About />
          </div>
          <Particles />
        </div>
      </ScrollLock>
    </div>
  );
}
