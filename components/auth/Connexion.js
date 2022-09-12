import Link from "next/link";
import styles from "../../styles/Inscription.module.scss";
import stylesContact from "../../styles/Contact.module.scss";
import stylesHome from "../../styles/Home.module.scss";

const Connexion = () => {
  return (
    <div className={styles.formInscription}>
      <form
        className={stylesContact.contactForm}
        action="/send-data-here"
        method="post"
      >
        <div className={stylesContact.boxInForm}>
          <p className={stylesContact.subtitleForm}>Connexion</p>
        </div>
        <div className={stylesContact.boxInForm}>
          <label className={stylesContact.labelForm} htmlFor="email">
            Email :
          </label>
          <input className={styles.inputEmail} type="email" />
        </div>
        <div className={stylesContact.boxInForm}>
          <label className={stylesContact.labelForm} htmlFor="password">
            Mot de passe :
          </label>
          <input className={styles.inputEmail} type="password" />
        </div>
        <div className={styles.boxInFormSubmit}>
          <Link href={"/dashboard/"}>
            <button
              className={`${stylesHome.btn} ${stylesHome.btnPrimary}`}
              type="submit"
            >
              Connexion
            </button>
          </Link>
        </div>
      </form>
      <p className={styles.alreadySub}>
        Pas encore de compte ?{" "}
        <Link href={"/inscription/"}>
          <span className={styles.colorLink}>Inscrivez-vous</span>
        </Link>
      </p>
    </div>
  );
};

export default Connexion;
