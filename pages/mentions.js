import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Cgu.module.scss";
import stylesContact from "../styles/Contact.module.scss";
import Layout from "../components/Layout";

export default function Cgu() {
  return (
    <div className={stylesContact.main}>
      <div className={styles.boxCgu}>
        <div className={styles.imgCgu}>
          <Image alt="img_cgu" src="/assets/img/img_cgu.svg" layout="fill" />
        </div>
        <h1 className={styles.title}>
          Conditions générales d&apos;utilisation
        </h1>
        <h2 className={styles.sub}>
          <span>Article 1</span> : <span>Objet</span>{" "}
        </h2>
        <p className={styles.text}>
          Les présentes CGU ou Conditions Générales d’Utilisation encadrent
          juridiquement l’utilisation des services du site O&apos;Food (ci-après
          dénommé « le site »). Constituant le contrat entre la société
          O&apos;Food, l’Utilisateur, l’accès au site doit être précédé de
          l’acceptation de ces CGU. L’accès à cette plateforme signifie
          l’acceptation des présentes CGU.
        </p>
        <h2 className={styles.sub}>
          <span>Article 2</span> : <span>Accès au site</span>
        </h2>
        <p className={styles.text}>
          Le site O&apos;Food permet d’accéder gratuitement aux services
          suivants :
        </p>
        <ol className={styles.text}>
          <li>Proposition de recettes (petit dejeuner, diner, dessert…)</li>
          <li>Proposition de menus (3 repas par jour)</li>
        </ol>
        <p className={styles.text}>
          Le site est accessible gratuitement depuis n’importe où par tout
          utilisateur disposant d’un accès à Internet. Tous les frais
          nécessaires pour l’accès aux services (matériel informatique,
          connexion Internet…) sont à la charge de l’utilisateur.L’accès aux
          services dédiés aux membres s’effectue à l’aide d’un identifiant et
          d’un mot de passe.Pour des raisons de maintenance ou autres, l’accès
          au site peut être interrompu ou suspendu par l’éditeur sans préavis ni
          justification.
        </p>
        <h2 className={styles.sub}>
          <span>Article 3</span> : <span>Collecte des données</span>
        </h2>
        <p className={styles.text}>
          Pour la création du compte de l’Utilisateur, la collecte des
          informations au moment de l’inscription sur le site est nécessaire et
          obligatoire. Conformément à la loi n°78-17 du 6 janvier relative à
          l’informatique, aux fichiers et aux libertés, la collecte et le
          traitement d’informations personnelles s’effectuent dans le respect de
          la vie privée.Suivant la loi Informatique et Libertés en date du 6
          janvier 1978, articles 39 et 40, l’Utilisateur dispose du droit
          d’accéder, de rectifier, de supprimer et d’opposer ses données
          personnelles. L’exercice de ce droit s’effectue par :Le formulaire de
          contact ;Son espace client.
        </p>
        <h2 className={styles.sub}>
          <span>Article 4</span> : <span>Propriété intellectuelle</span>
        </h2>
        <p className={styles.text}>
          Les marques, logos ainsi que les contenus du site O&apos;Food
          (illustrations graphiques, textes…) sont protégés par le Code de la
          propriété intellectuelle et par le droit d’auteur.La reproduction et
          la copie des contenus par l’Utilisateur requièrent une autorisation
          préalable du site. Dans ce cas, toute utilisation à des usages
          commerciaux ou à des fins publicitaires est proscrite.
        </p>
        <h2 className={styles.sub}>
          <span>Article 5</span> : <span>Responsabilité</span>
        </h2>
        <p className={styles.text}>
          Bien que les informations publiées sur le site soient réputées
          fiables, le site se réserve la faculté d’une non-garantie de la
          fiabilité des sources.Les informations diffusées sur le site
          O&apos;Food sont présentées à titre purement informatif et sont sans
          valeur contractuelle. En dépit des mises à jour régulières, la
          responsabilité du site ne peut être engagée en cas de modification des
          dispositions administratives et juridiques apparaissant après la
          publication. Il en est de même pour l’utilisation et l’interprétation
          des informations communiquées sur la plateforme.Le site décline toute
          responsabilité concernant les éventuels virus pouvant infecter le
          matériel informatique de l’Utilisateur après l’utilisation ou l’accès
          à ce site.Le site ne peut être tenu pour responsable en cas de force
          majeure ou du fait imprévisible et insurmontable d’un tiers.La
          garantie totale de la sécurité et la confidentialité des données n’est
          pas assurée par le site. Cependant, le site s’engage à mettre en œuvre
          toutes les méthodes requises pour le faire au mieux.
        </p>
      </div>
    </div>
  );
}

Cgu.getLayout = function getLayout(Cgu) {
  return <Layout>{Cgu}</Layout>;
};
