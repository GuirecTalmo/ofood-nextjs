import Image from "next/image";
import styles from "../styles/Inscription.module.scss";
import Layout from "../components/Layout";
import Signin from "../components/auth/Connexion";

export default function Connexion() {
  return (
    <div className={styles.main}>
      <div className={styles.leftContainer}>
        <Signin />
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
