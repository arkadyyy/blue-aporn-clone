import styles from "./styles.module.css";
import { Link } from "@/components";
import logo from "@/assets/logo.svg";
import menuIcon from "@/assets/icons/menu.svg";
import closeIcon from "@/assets/icons/plus.svg";
import Button from "@/components/elements/Button/Button";
import { useDrawer } from "../Drawer/DrawerContext";
import { useFaqScrollStore } from "@/store/useFaqScrollStore";
import { useRouter } from "@tanstack/react-router";
import { useModalStore } from "@/store/useModalStore";

export default function Navbar() {
  const { isOpen: isDrawerOpen, toggleDrawer } = useDrawer();
  const { open: openModal } = useModalStore();
  const router = useRouter();

  const { pathname } = router.state.location;

  const isHomepage = pathname === "/";
  const isFaqAtTop = isHomepage
    ? useFaqScrollStore((state) => state.isFaqAtTop)
    : true;
  return (
    <div data-stick={isFaqAtTop} className={styles.container_wrapper}>
      <div className={styles.container} data-stick={isFaqAtTop}>
        <div className={styles.link_container}>
          <Link to="/menu">Menu</Link>
          <Link to="/membership">Blue Apron+</Link>
          <Link to="/autoship">Autoship & Save</Link>
        </div>
        <div className={styles.logo_container}>
          <button onClick={() => toggleDrawer()} className={styles.menu_btn}>
            <img
              className={styles.hamburger}
              src={isDrawerOpen ? closeIcon : menuIcon}
              data-open={isDrawerOpen}
              alt="menu icon"
            />
          </button>
          <img className={styles.logo} src={logo} alt="blue aporn logo" />
        </div>
        <div className={styles.link_container}>
          <Link onClick={() => openModal("login-email")}>Login</Link>
          <Link to="/">Sign Up</Link>
          <Button to="/menu">Show now</Button>
        </div>
      </div>
    </div>
  );
}
