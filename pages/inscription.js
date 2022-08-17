import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Inscription.module.scss";
import stylesContact from "../styles/Contact.module.scss";
import stylesHome from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import Register from "../components/auth/Register";

export default function Inscription() {
  return (
    <div className={styles.main}>
      <div className={styles.leftContainer}>
        <Register />
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

Inscription.getLayout = function getLayout(Inscription) {
  return <Layout>{Inscription}</Layout>;
};
