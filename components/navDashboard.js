import Image from "next/image";
import Link from "next/link";

export default function navBarDashboard() {
  return (
    <div className="nav_container">
      <div className="logo">
        <Image
          alt="logo__img"
          src="https://i89.servimg.com/u/f89/09/02/66/41/logo-p10.png"
          layout="fill"
        />
      </div>
      <nav className="nav">
        <input type="checkbox" id="toggle-nav" />
        <label htmlFor="toggle-nav">
          <span className="bar bar-one" />
          <span className="bar bar-two" />
          <span className="bar bar-three" />
        </label>

        <ul className="nav__list">
          <Link href={"/"}>
            <li>Dashboard</li>
          </Link>
          <Link href={"/connexion/"}>
            <li>Déconnexion</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
