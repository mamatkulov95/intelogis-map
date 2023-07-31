// Header.js
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import companyLogo from "../../assets/company-logo.svg";
import data from "../../assets/data.json";

export default function Header() {
  const { menuItems } = data;

  return (
    <div className={styles.header}>
      <Link className={styles.compLogo} to="/">
        <img src={companyLogo} alt="company-logo" />
      </Link>
      <ul className={styles.navMenu}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link className={styles.navMenuItems} to={item.path}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
