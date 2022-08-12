import initFirebase from "../../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { setUserCookie } from "../../firebase/userCookies";
import { mapUserData } from "../../firebase/mapUserData";
import Link from "next/link";
import styles from "../../styles/Inscription.module.scss";
import stylesContact from "../../styles/Contact.module.scss";
import stylesHome from "../../styles/Home.module.scss";

initFirebase(); // initialize firebase

const firebaseAuthConfig = {
  signInFlow: "popup",
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
    // add additional auth flows below
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: "/dashboard/",
  credentialHelper: "none",
  callbacks: {
    signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
      const userData = mapUserData(user);
      setUserCookie(userData);
    },
  },
};

const FirebaseAuth = () => {
  // Do not SSR FirebaseUI, because it is not supported.
  // https://github.com/firebase/firebaseui-web/issues/213
  const [renderAuth, setRenderAuth] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setRenderAuth(true);
    }
  }, []);
  return (
    <div>
      {renderAuth ? (
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
      ) : null}
    </div>
  );
};

export default FirebaseAuth;
