import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Dashboard.module.scss";
import adminStyles from "../styles/Admin.module.scss";
import AdminLayout from "../components/AdminLayout";
import "normalize.css";

export default function Admin() {
  return (
    <div className={adminStyles.mainAdmin}>
      <div className={styles.flexContainerRight}>
        <div className={adminStyles.infoContainer}>
          <div className={adminStyles.textContainer}>
            <h1 className={styles.mainTitle}>Gestion des recettes</h1>
            <p className={styles.simpleText}>
              Il y a actuellement <span>127</span> recettes. Cliquer sur
              « Ajouter une recette » pour en entrer une nouvelle.
              <br /> Cliquer sur « Éditer » pour modifier pour supprimer une
              recette.
            </p>
          </div>
        </div>

        {/* CARDS */}

        <div className={styles.mainCardContainer}>
          <div className={styles.card__container}>
            <Link href={"/recetteForm/"}>
              <div className={styles.Card}>
                <div>
                  <button className={adminStyles.button__add} type="button">
                    +
                  </button>
                  <div>
                    <p className={styles.time__recipe}>Ajouter une recette</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link href={"/recetteForm/"}>
              <div className={styles.Card}>
                <div className={adminStyles.container__picture}>
                  <Image
                    alt="image de la recette"
                    src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                    layout="fill"
                  />
                </div>
                <div>
                  <h3 className={styles.name__recipe}> Recipe Name </h3>
                </div>
                <div>
                  <button className={adminStyles.button__card} type="button">
                    Modifier
                  </button>
                </div>
              </div>
            </Link>
            <Link href={"/recetteForm/"}>
              <div className={styles.Card}>
                <div className={adminStyles.container__picture}>
                  <Image
                    alt="image de la recette"
                    src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                    layout="fill"
                  />
                </div>
                <div>
                  <h3 className={styles.name__recipe}> Recipe Name </h3>
                </div>
                <div>
                  <button className={adminStyles.button__card} type="button">
                    Modifier
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* END CARDS */}
      </div>
    </div>
  );
}

Admin.getLayout = function getLayout(Admin) {
  return <AdminLayout>{Admin}</AdminLayout>;
};
