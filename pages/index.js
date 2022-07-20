import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <div className={styles.main}>
      <Head>
        <title>O&apos;food</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.background}></div>
      <div className={styles.homeContainer}>
        <div className={styles.leftContainer}>
          <h1 className={styles.mainTitle}>O&apos;food</h1>
          <div className={styles.textContainer}>
            <span className={styles.sideBar}></span>
            <p className={styles.presentationText}>
              Vous souhaitez vous rééquilibrer sur le plan alimentaire ? Vous
              souhaitez perdre du poids ou en gagner de manière durable et
              atteindre le bon équilibre pour votre corps ? Alors O’food est la
              solution !
            </p>
          </div>
          <div className={styles.ButtonContainer}>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>
              Découvrir O&apos;food
            </button>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.pictureContainer}>
            <Image
              alt="logo__img"
              src="/assets/img/image-ofood-1.svg"
              layout="fill"
            />
          </div>
        </div>
        <div className={styles.leftContainer2}>
          <div className={styles.pictureContainer}>
            <Image
              alt="logo__img"
              src="/assets/img/image-ofood-2.svg"
              layout="fill"
            />
          </div>
        </div>
        <div className={styles.rightContainer2}>
          <h3 className={styles.greenTitle}>O&apos;food</h3>
          <h4 className={styles.subTitle}>Qu&apos;est-ce que O&apos;food ?</h4>
          <span className={styles.topBar}></span>
          <div className={styles.textContainer}>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
              hendrerit purus. Etiam diam libero, euismod vitae faucibus ut,
              ultricies nec arcu. Maecenas ligula urna, viverra sit amet erat a,
              vestibulum faucibus nisi. Praesent a libero a ipsum lacinia
              bibendum efficitur quis sem. In hendrerit scelerisque porta. Sed
              aliquam bibendum lorem sit amet mollis.
            </p>
          </div>
        </div>
        <div className={styles.boxContact}>
          <p className={styles.mainQuestion}>
            Des questions ? Nous sommes là !
          </p>
          <Link href={`/contact`}>
            <a className={styles.contactlink}>Nous contacter</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

HomePage.getLayout = function getLayout(HomePage) {
  return <Layout>{HomePage}</Layout>;
};
