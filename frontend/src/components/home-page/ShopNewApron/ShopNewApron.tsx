import styles from "./styles.module.css";
import secondary_hero from "@/assets/img/secondary_hero.webp";
import together from "@/assets/svg/together.svg";
export default function ShopNewApron() {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.details_container}>
          <h1 className={styles.header}>
            Shop the <span>new</span> Blue Apron
          </h1>
          <div className={styles.details_bottom_container}>
            <h4>100+ meals to choose from, no subscription needed</h4>
            <button>Shop now</button>
          </div>
        </div>
        <img className={styles.img} src={secondary_hero} alt="food image" />
        <img className={styles.svg} src={together} alt="" />
      </div>
    </div>
  );
}
