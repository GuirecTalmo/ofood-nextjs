import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Inscription.module.scss";
import stylesContact from "../styles/Contact.module.scss";
import stylesHome from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import FirebaseAuth from "../components/auth/FirebaseAuth";

export default function Connexion() {
  return (
    <div className={styles.main}>
      <div className={styles.leftContainer}>
        <FirebaseAuth />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.bgContainer}>
          <Image
            alt="Background container"
            src="/assets/img/background-illu.svg"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}

Connexion.getLayout = function getLayout(Connexion) {
  return <Layout>{Connexion}</Layout>;
};
