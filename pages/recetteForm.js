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
        <div className={adminStyles.recipe__form}>
          <form className={adminStyles.profilForm}>
            <div className={adminStyles.profilFormBloc}>
              <label className={adminStyles.labelProfil}>
                NOM DE LA RECETTE
              </label>
              <input type="text" className={adminStyles.inputProfil}></input>
            </div>
            <div className={adminStyles.profilFormBloc}>
              <label className={adminStyles.labelProfil}>INGRÉDIENTS</label>
              <textarea
                type="text"
                className={adminStyles.inputProfil}
              ></textarea>
            </div>
            <div className={adminStyles.profilFormBloc}>
              <label className={adminStyles.labelProfil}>
                ÉTAPES DE LA RECETTE
              </label>
              <textarea
                type="text"
                className={adminStyles.inputProfil}
              ></textarea>
            </div>

            <div className={adminStyles.profilFormBloc}>
              <label className={adminStyles.labelProfil}>RECETTE POUR :</label>
              <div className={adminStyles.IntoleranceBox}>
                <input type="checkbox"></input>
                <label className={adminStyles.labelGenre}>Intolérance 1</label>
              </div>
              <div className={adminStyles.IntoleranceBox}>
                <input type="checkbox"></input>
                <label className={adminStyles.labelGenre}>Intolérance 2</label>
              </div>
              <div className={adminStyles.IntoleranceBox}>
                <input type="checkbox"></input>
                <label className={adminStyles.labelGenre}>Intolérance 3</label>
              </div>
              <div className={adminStyles.IntoleranceBox}>
                <input type="checkbox"></input>
                <label className={adminStyles.labelGenre}>Intolérance 4</label>
              </div>
              <div className={adminStyles.IntoleranceBox}>
                <input type="checkbox"></input>
                <label className={adminStyles.labelGenre}>Intolérance 5</label>
              </div>
              <div className={adminStyles.IntoleranceBox}>
                <input type="checkbox"></input>
                <label className={adminStyles.labelGenre}>Intolérance 6</label>
              </div>
            </div>

            <div className={adminStyles.profilFormBlocLast}>
              <p className={adminStyles.labelProfil}>VISUEL</p>
              <div className={adminStyles.banner__container}>
                <Image
                  alt="logo__img"
                  src="https://i89.servimg.com/u/f89/09/02/66/41/plat_o10.jpg"
                  layout="fill"
                />
              </div>
              <label
                className={adminStyles.labelProfilAvatar}
                htmlFor="avatar"
              ></label>
              <input
                type="file"
                className={adminStyles.file}
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
              />
            </div>

            <div className={adminStyles.buttons__container}>
              <button className={adminStyles.button__modify} type="submit">
                Enregistrer
              </button>
              <button className={adminStyles.button__supp} type="submit">
                Supprimer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

RecetteForm.getLayout = function getLayout(RecetteForm) {
  return <AdminLayout>{RecetteForm}</AdminLayout>;
};
