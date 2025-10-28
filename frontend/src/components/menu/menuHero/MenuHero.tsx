import MenuTopSlider from "@/components/menu/MenuTopSlider";
import styles from "./menuHero.module.css";
import ZipBanner from "../zipBanner/ZipBanner";

export default function MenuHero() {
  return (
    <div className={styles.heroWrap}>
      <MenuTopSlider />
      <ZipBanner />
    </div>
  );
}
