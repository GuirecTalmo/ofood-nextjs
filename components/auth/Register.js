import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Inscription.module.scss";
import stylesContact from "../../styles/Contact.module.scss";
import stylesHome from "../../styles/Home.module.scss";

export default function Register() {
  const router = useRouter();
  const form = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className={styles.formInscription}>
      <form
        className={stylesContact.contactForm}
        onSubmit={handleRegister}
        ref={form}
      >
        <div className={stylesContact.boxInForm}>
          <p className={stylesContact.subtitleForm}>Inscription</p>
        </div>
        <div className={stylesContact.boxInForm}>
          <label className={stylesContact.labelForm} htmlFor="email">
            Email :
          </label>
          <input
            name="email"
            value={email}
            onChange={onChangeEmail}
            className={styles.inputEmail}
            type="email"
          />
        </div>
        <div className={stylesContact.boxInForm}>
          <label className={stylesContact.labelForm} htmlFor="password">
            Mot de passe :
          </label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={onChangePassword}
            className={styles.inputEmail}
          />
        </div>
        <div className={stylesContact.boxInForm}>
          <label className={stylesContact.labelForm} htmlFor="verify-password">
            Confirmer le mot de passe :
          </label>
          <input
            name="passwordConfirmation"
            className={styles.inputEmail}
            type="password"
          />
        </div>
        <div className={styles.boxInFormSubmit}>
          <button
            className={`${stylesHome.btn} ${stylesHome.btnPrimary}`}
            type="submit"
          >
            S&apos;inscrire
          </button>
        </div>
      </form>
      <p className={styles.alreadySub}>
        Déjà un compte ?{" "}
        <Link href={"/connexion/"}>
          <span className={styles.colorLink}>Connectez-vous</span>
        </Link>
      </p>
    </div>
  );
}
