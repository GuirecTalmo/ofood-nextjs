import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Recette.module.scss";
import stylesDashboard from "../styles/Dashboard.module.scss";
import stylesHome from "../styles/Home.module.scss";
import DashboardLayout from "../components/DashboardLayout";
import "normalize.css";

export default function Recette() {
  return (
    <div className={stylesDashboard.main}>
      <div className={styles.buttonBackContainer}>
        <button className={styles.buttonBack}>Retour</button>
      </div>
      <div className={styles.cardRecipeContainer}>
        <div className={styles.cardRecipe}></div>
      </div>
    </div>
  );
}

Recette.getLayout = function getLayout(Recette) {
  return <DashboardLayout>{Recette}</DashboardLayout>;
};
