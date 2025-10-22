import { Header, Text } from "@/components";
import styles from "./styles.module.css";
import scheduleIcon from "@/assets/icons/autoship_schedule.svg";
import deliveryIcon from "@/assets/icons/autoship_delivery.svg";
import makeChangesIcon from "@/assets/icons/autoship_make_changes.svg";
import skipIcon from "@/assets/icons/autoship_skip.svg";

const content = [
  {
    header: "1. Set your schedule",
    text: "You get to decide how often you want deliveries and what day of the week you want them.",
    icon: scheduleIcon,
  },
  {
    header: "2. Create your delivery",
    text: "Choose your proteins and the types of menu items you want, from classic meal kits to our new pre-made meals.",
    icon: deliveryIcon,
  },
  {
    header: "3. Make changes anytime",
    text: "Every order is pre-filled with meals we recommend, but you can add, swap, or remove anything before shipping.",
    icon: makeChangesIcon,
  },
];

export default function HowItWorks() {
  return (
    <>
      <div className={styles.container}>
        <Text>HOW IT WORKS</Text>
        <div className={styles.content_container}>
          {content.map((c) => (
            <div className={styles.content_sec}>
              <img src={c.icon} />
              <div>
                <Header size="xs">{c.header}</Header>
                <Text>{c.text}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottom_content}>
        <img src={skipIcon} />
        <Text size="lg">
          Skip, update, or cancel anytime. No commitments, no strings attached.
        </Text>
      </div>
    </>
  );
}
