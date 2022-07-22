import Image from "next/image";
import Link from "next/link";

export default function navBarDashboard() {
  return (
    <nav className="nav_container_dashboard">
      <div className="avatar">
        <Image
          alt="logo__img"
          src="https://i89.servimg.com/u/f89/09/02/66/41/avmys10.jpg"
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
          <Link href={"/connexion/"}>
            <li>Déconnexion</li>
          </Link>
        </ul>
      </nav>
    </nav>
  );
}
