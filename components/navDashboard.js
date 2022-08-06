import Image from "next/image";
import Link from "next/link";

export default function navBarDashboard() {
  return (
    <nav className="navSize">
      <div className="nav_container_dashboard">
        <div className="avatar">
          <Image
            alt="logo__img"
            src="https://i89.servimg.com/u/f89/09/02/66/41/avmys10.jpg"
            layout="fill"
          />
        </div>
        <div className="nav">
          <input type="checkbox" id="toggle-nav" />
          <label htmlFor="toggle-nav">
            <span className="bar bar-one" />
            <span className="bar bar-two" />
            <span className="bar bar-three" />
          </label>

          <ul className="nav__list">
            <Link href={"/"}>
              <li className="mobileDisplay">Accueil</li>
            </Link>
            <Link href={"/dashboard/"}>
              <li className="mobileDisplay">Dashboard</li>
            </Link>
            <Link href={"/profil/"}>
              <li className="mobileDisplay">Profil</li>
            </Link>
            <Link href={"/connexion/"}>
              <li>Déconnexion</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
