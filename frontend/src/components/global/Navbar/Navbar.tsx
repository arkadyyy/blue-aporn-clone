import styles from "./styles.module.css";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.svg";
import menuIcon from "@/assets/icons/menu.svg";
export default function Navbar() {
  return (
    <div className={styles.container}>
      <div>
        <Link className={styles.link} to="/">
          Menu
        </Link>
        <Link className={styles.link} to="/">
          Blue Apron+
        </Link>
        <Link className={styles.link} to="/">
          Autoship & Save
        </Link>
      </div>
      <div className={styles.logo_container}>
        <button className={styles.menu_btn}>
          <img className={styles.hamburger} src={menuIcon} alt="menu icon" />
        </button>
        <img className={styles.img} src={logo} alt="blue aporn logo" />
      </div>
      <div>
        <Link className={styles.link} to="/">
          Login
        </Link>
        <Link className={styles.link} to="/">
          Sign Up
        </Link>
        <Link className={styles.link_btn} to="/">
          Show now
        </Link>
      </div>
    </div>
  );
}
