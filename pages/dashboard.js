import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Dashboard.module.scss";
import DashboardLayout from "../components/DashboardLayout";

export default function Dashboard() {
  return <div className={styles.main}></div>;
}

Dashboard.getLayout = function getLayout(Dashboard) {
  return <DashboardLayout>{Dashboard}</DashboardLayout>;
};
