import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Dashboard.module.scss";
import DashboardLayout from "../components/DashboardLayout";

export default function Dashboard() {
  return (
    <div className={styles.main}>
      <div>
        <ul className={styles.flexContainerLeft}>
          <Link href={"/dashboard/"}>
            <li className={styles.linkMenu}>Accueil</li>
          </Link>
          <Link href={"#"}>
            <li className={styles.linkMenu}>Profil</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

Dashboard.getLayout = function getLayout(Dashboard) {
  return <DashboardLayout>{Dashboard}</DashboardLayout>;
};
