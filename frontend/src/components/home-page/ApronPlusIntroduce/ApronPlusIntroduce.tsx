import styles from "./styles.module.css";
import introduce from "@/assets/img/introduce.webp";
import tickIcon from "@/assets/icons/tick.svg";
import { Button, Header, Text } from "@/components";
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
          <Header>Introducing Blue Apron+</Header>
          <Header>Get started with a 30-day free trial.</Header>
          <div className={styles.tick_container}>
            {ticks.map((tick) => (
              <div className={styles.tick}>
                <Text size="xl">{tick}</Text>
              </div>
            ))}
          </div>
          <Button to="/">Learn more</Button>
        </div>
      </div>
    </div>
  );
}
