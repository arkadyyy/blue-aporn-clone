import styles from "./styles.module.css";
import introduce from "@/assets/img/introduce.webp";
import tickIcon from "@/assets/icons/tick.svg";
const ticks = [
  "Free shipping on every order",
  "Exclusive members-only perks",
  "Unlimited access to Tastemade+",
];
export default function ApronPlusIntroduce() {
  return (
    <div className={styles.container}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${introduce})` }}
      ></div>
      <div className={styles.details_container}>
        <div className={styles.details}>
          <h2>Introducing Blue Apron+</h2>
          <h3>Get started with a 30-day free trial.</h3>
          {ticks.map((tick) => (
            <div className={styles.tick_container}>
              <img
                className={styles.img}
                style={{ color: "red" }}
                src={tickIcon}
              />{" "}
              <h3>{tick}</h3>
            </div>
          ))}
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
}
