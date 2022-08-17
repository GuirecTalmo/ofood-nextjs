import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";
import styles from "../../styles/Inscription.module.scss";
import stylesContact from "../../styles/Contact.module.scss";
import stylesHome from "../../styles/Home.module.scss";

export default Register;

function Register() {
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(user) {
    return userService
      .register(user)
      .then(() => {
        alertService.success("Registration successful", {
          keepAfterRouteChange: true,
        });
        router.push("login");
      })
      .catch(alertService.error);
  }

  return (
    <div className={styles.formInscription}>
      <form
        className={stylesContact.contactForm}
        onSubmit={handleSubmit(onSubmit)}
        method="post"
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
            {...register("email")}
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
            {...register("password")}
            className={styles.inputEmail}
          />
        </div>
        <div className={stylesContact.boxInForm}>
          <label className={stylesContact.labelForm} htmlFor="verify-password">
            Confirmer le mot de passe :
          </label>
          <input
            name="passwordConfirmation"
            {...register("passwordConfirmation")}
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
