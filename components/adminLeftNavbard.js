import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

export default function LeftNavBarDashboard() {
  return (
    <div className="flexContainerLeft">
      <ul className="ulMenu">
        <Link href={"/admin/"}>
          <li className="linkMenu">
            <AiOutlineHome className="iconNav" />
          </li>
        </Link>
      </ul>
    </div>
  );
}
