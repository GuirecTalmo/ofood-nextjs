import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer_container">
      <ul className="nav-footer">
        <Link href={`/mentions`}>
          <li className="link-footer">
            <a>Mentions légales</a>
          </li>
        </Link>
        <Link href={`/contact`}>
          <li className="link-footer">
            <a>Contact</a>
          </li>
        </Link>
      </ul>
    </footer>
  );
}
