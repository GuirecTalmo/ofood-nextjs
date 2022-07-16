import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Contact.module.scss";
import Layout from "../components/Layout";

export default function Contact() {
  return (
    <div className={styles.main}>
      <div className={styles.boxTitle}>
        <h1 className={styles.mainTitle}>
          Une question ? Besoin d’un renseignement ?{" "}
        </h1>
        <p className={styles.subtitle}>
          Contactez-nous ! Nous vous répondrons dans les plus brefs délais !
        </p>
      </div>

      <div className={styles.pictureContainer}>
        <Image
          alt="background form"
          src="/assets/img/bg_contact.svg"
          layout="fill"
        />
      </div>

      <div className={styles.boxForm}>
        <p className={styles.subtitleForm}>Écrivez-nous !</p>
        <form
          className={styles.contactForm}
          action="/send-data-here"
          method="post"
        >
          <div className={styles.boxInForm}>
            {" "}
            <label className={styles.labelForm} htmlFor="email">
              Email
            </label>
            <input
              className={styles.inputEmail}
              type="text"
              id="email"
              name="email"
            />
          </div>
          <div className={styles.boxInForm}>
            <label className={styles.labelForm} htmlFor="subject">
              Subject
            </label>
            <input
              className={styles.inputSubject}
              type="text"
              id="subject"
              name="subject"
            />
          </div>

          <div className={styles.boxInForm}>
            {" "}
            <label className={styles.labelForm} htmlFor="message">
              Message
            </label>
            <textarea
              className={styles.textForm}
              name="message"
              type="text"
              id="message"
              placeholder="Type your message here"
            ></textarea>
          </div>

          <div className={styles.boxInFormSub}>
            <button className={styles.buttonContact} type="submit">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Contact.getLayout = function getLayout(Contact) {
  return <Layout>{Contact}</Layout>;
};
