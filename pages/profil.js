import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Profil.module.scss";
import stylesDashboard from "../styles/Dashboard.module.scss";
import stylesInscription from "../styles/Inscription.module.scss";
import stylesHome from "../styles/Home.module.scss";
import DashboardLayout from "../components/DashboardLayout";
import "normalize.css";

export default function Profil() {
  return (
    <div className={stylesDashboard.main}>
      <div className={styles.profilFormContainer}>
        <form className={styles.profilForm}>
          <div className={styles.profilFormBloc}>
            <label className={styles.labelProfil}>NOM</label>
            <input className={styles.inputProfil}></input>
          </div>
          <div className={styles.profilFormBloc}>
            <label className={styles.labelProfil}>PRÉNOM</label>
            <input className={styles.inputProfil}></input>
          </div>
          <div className={styles.profilFormBloc}>
            <label className={styles.labelProfil}>TAILLE</label>
            <input className={styles.inputProfil}></input>
          </div>
          <div className={styles.profilFormBloc}>
            <label className={styles.labelProfil}>POIDS</label>
            <input className={styles.inputProfil}></input>
          </div>
          <div className={styles.profilFormBloc}>
            <label className={styles.labelProfil}>SEXE</label>
            <div className={styles.IntoleranceBox}>
              <input type="radio" name="sexe"></input>
              <label className={styles.labelGenre}>Homme</label>
            </div>
            <div className={styles.IntoleranceBox}>
              <input type="radio" name="sexe"></input>
              <label className={styles.labelGenre}>Femme</label>
            </div>
          </div>

          <div className={styles.profilFormBloc}>
            <label className={styles.labelProfil}>INTOLÉRANCES</label>
            <div className={styles.IntoleranceBox}>
              <input type="checkbox"></input>
              <label className={styles.labelGenre}>Intolérance 1</label>
            </div>
            <div className={styles.IntoleranceBox}>
              <input type="checkbox"></input>
              <label className={styles.labelGenre}>Intolérance 2</label>
            </div>
            <div className={styles.IntoleranceBox}>
              <input type="checkbox"></input>
              <label className={styles.labelGenre}>Intolérance 3</label>
            </div>
            <div className={styles.IntoleranceBox}>
              <input type="checkbox"></input>
              <label className={styles.labelGenre}>Intolérance 4</label>
            </div>
            <div className={styles.IntoleranceBox}>
              <input type="checkbox"></input>
              <label className={styles.labelGenre}>Intolérance 5</label>
            </div>
            <div className={styles.IntoleranceBox}>
              <input type="checkbox"></input>
              <label className={styles.labelGenre}>Intolérance 6</label>
            </div>
          </div>

          <div className={styles.profilFormBlocLast}>
            <p className={styles.labelProfil}>AVATAR</p>
            <div className="avatar">
              <Image
                alt="logo__img"
                src="https://i89.servimg.com/u/f89/09/02/66/41/avmys10.jpg"
                layout="fill"
              />
            </div>
            <label className={styles.labelProfilAvatar} htmlFor="avatar">
              Modifier
            </label>
            <input
              type="file"
              className={styles.file}
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            />
          </div>

          <div className={stylesInscription.boxInFormSubmit}>
            <button
              className={`${stylesHome.btn} ${stylesHome.btnPrimary}`}
              type="submit"
            >
              S&apos;inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Profil.getLayout = function getLayout(Profil) {
  return <DashboardLayout>{Profil}</DashboardLayout>;
};
