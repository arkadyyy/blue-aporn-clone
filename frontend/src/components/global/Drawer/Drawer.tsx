import { Button, Link } from "@/components";
import styles from "./styles.module.css";
import { useDrawer } from "./DrawerContext";
export default function Drawer({}: {}) {
  const { isOpen, closeDrawer } = useDrawer();
  return (
    <div
      data-open={isOpen}
      className={styles.container}
      onClick={() => closeDrawer()}
    >
      <div data-open={isOpen} className={styles.drawer}>
        <div className={styles.links_container}>
          <Link to="/menu">Menu</Link>
          <Link to="/menu">Blue Apron+</Link>
          <Link to="/menu">Authoship & Save</Link>
        </div>
        <hr />
        <div className={styles.links_container}>
          <Link to="/">Login</Link>
          <Link to="/">Sign Up</Link>
          <Button to="/menu">Shop now</Button>
        </div>
      </div>
    </div>
  );
}
