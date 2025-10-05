import tasting from "@/assets/svg/tasting.svg";
import styles from "./styles.module.css";
export default function BrowseMenuCTA() {
  return (
    <div className={styles.browse_menu_cta_container}>
      <img src={tasting} alt="tasting svg" />
      <h2>100+ meals to choose from</h2>
      <button className={styles.button}>Browse the full menu</button>
    </div>
  );
}
