import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Dashboard.module.scss";
import stylesHome from "../styles/Home.module.scss";
import DashboardLayout from "../components/DashboardLayout";
import "normalize.css";

export default function Profil() {
  return (
    <div className={styles.main}>
      <div className={styles.flexContainerLeft}>
        <ul className={styles.ulMenu}>
          <Link href={"/dashboard/"}>
            <li className={styles.linkMenu}>Accueil</li>
          </Link>
          <Link href={"#"}>
            <li className={styles.linkMenu}>Profil</li>
          </Link>
        </ul>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.mainTitle}>Mon planing</h1>
          <p className={styles.simpleText}>
            Vos informations sont incomplètes.
            <br /> Rendez vous dans votre profil pour finaliser votre
            inscription et ainsi générer votre planing
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={`${stylesHome.btn} ${stylesHome.btnPrimary}`}>
            Générer
          </button>
        </div>
      </div>
    </div>
  );
}

Profil.getLayout = function getLayout(Profil) {
  return <DashboardLayout>{Profil}</DashboardLayout>;
};
