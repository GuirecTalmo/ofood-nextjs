import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Recette.module.scss";
import adminStyles from "../styles/Admin.module.scss";
import AdminLayout from "../components/AdminLayout";
import "normalize.css";

export default function RecetteForm() {
  return (
    <div className={adminStyles.mainAdmin}>
      <div className={styles.card__container}>
        <div className={styles.Card}>
          <div className={styles.container__picture}>
            <Image
              alt="image de la recette"
              src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
              layout="fill"
            />
          </div>
          <div>
            <div className={styles.TitleRecipeBox}>
              <h1 className={styles.name__recipe}> Recipe Name </h1>
              <p className={styles.time__recipe}>15 mins</p>
            </div>
            <div className={styles.LineRecipeContainer}>
              <hr className={styles.LineRecipe} />
            </div>
            <div className={styles.ListContainer}>
              <h3 className={styles.TitleStep}>Ingrédients :</h3>
              <ul className={styles.Ulsteps}>
                <li className={styles.LiSteps}>
                  - 1 tranche de pain de campagne
                </li>
                <li className={styles.LiSteps}>- 1/2 avocat</li>
                <li className={styles.LiSteps}>- 1 oeuf</li>
                <li className={styles.LiSteps}>- 3g de graines de sésame</li>
              </ul>
            </div>

            <div className={styles.ListContainer}>
              <h3 className={styles.TitleStep}>Étapes :</h3>
              <ul className={styles.Ulsteps}>
                <li className={styles.LiSteps}>- Toaster le pain</li>
                <li className={styles.LiSteps}>
                  - Ecraser l’avocat avec une fourchette
                </li>
                <li className={styles.LiSteps}>- Pocher l’oeuf</li>
                <li className={styles.LiSteps}>- Assembler</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

RecetteForm.getLayout = function getLayout(RecetteForm) {
  return <AdminLayout>{RecetteForm}</AdminLayout>;
};
