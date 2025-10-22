import styles from "./styles.module.css";
import secondary_hero from "@/assets/img/secondary_hero.webp";
import together from "@/assets/svg/together.svg";
import { Header } from "@/components";
import Button from "@/components/elements/Button/Button";
export default function ShopNewApron() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.details_container}>
          <Header size="lg" className={styles.header}>
            Shop the <span>new</span> Blue Apron
          </Header>
          <div className={styles.details_bottom_container}>
            <Header size="md">
              100+ meals to choose from, no subscription needed
            </Header>
            <Button to="/menu">Shop now</Button>
          </div>
        </div>
        <img className={styles.img} src={secondary_hero} alt="food image" />
        <img className={styles.svg} src={together} alt="eating together svg" />
      </div>
    </div>
  );
}
