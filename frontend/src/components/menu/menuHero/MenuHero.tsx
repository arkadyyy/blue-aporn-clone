import MenuTopSlider from "@/components/menu/MenuTopSlider";
import styles from "./styles.module.css";
import ZipBanner from "../zipBanner/ZipBanner";
import MealTypes from "@/components/home-page/MealTypes/MealTypes";

export default function MenuHero() {
  return (
    <div className={styles.heroWrap}>
      <MenuTopSlider />
      <ZipBanner />
      <MealTypes /> {/*TODO: cahnge this - temporary here */}
    </div>
  );
}
