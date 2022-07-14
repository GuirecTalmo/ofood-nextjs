import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer_container">
      <ul className="nav-footer">
        <li className="link-footer">Mentions légales</li>
        <Link href={`/contact`}>
          <li className="link-footer">
            <a>Contact</a>
          </li>
        </Link>
      </ul>
    </footer>
  );
}
