import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

export default function LeftNavBarDashboard() {
  return (
    <div className="flexContainerLeft">
      <ul className="ulMenu">
        <Link href={"/dashboard/"}>
          <li className="linkMenu">
            <AiOutlineHome className="iconNav" />
          </li>
        </Link>
      </ul>
    </div>
  );
}
