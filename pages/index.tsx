import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const _fbLink = (style: string) => (
    <a
      href="https://www.facebook.com/2311611585790674/posts/2311613205790512/"
      target="_blank"
      rel="noreferrer"
      className={styles.fbLink}
    >
      <Image
        src="/fb-icon.svg"
        width="100"
        height="100"
        className={style}
        alt="Facebook"
      />
    </a>
  );

  const _introTextsAndFbLink = () => (
    <>
      <h1 className={styles.introTitle}>Klaun Bailo</h1>
      <p className={styles.introSubtitle}>klaun na profesionální úrovni</p>
      {_fbLink(styles.fbIcon)}
    </>
  );

  return (
    <>
      <Head>
        <title>Klaun Bailo</title>
        <meta
          name="description"
          content="Netradiční klaun na vaše kulturní akce"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.contrastFilter}></div>

        {_introTextsAndFbLink()}
        <div className={styles.hidePartOfVideoRightSide}></div>
        <div className={styles.hidePartOfVideoLeftSide}></div>
        <div className={styles.roundedWrap}></div>
        <video
          id="background-video"
          loop
          autoPlay
          muted
          width="100%"
          className={styles.video}
        >
          <source src="/bailo-short-clip.mp4" type="video/mp4" />
        </video>
      </main>
    </>
  );
};

export default Home;
