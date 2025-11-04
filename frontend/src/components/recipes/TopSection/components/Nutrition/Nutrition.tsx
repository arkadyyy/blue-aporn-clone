import styles from "./styles.module.css";
import { Text, Badge, Link } from "@/components";
export default function Nutrition() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text>NUTRITION</Text>
        <Text>
          510 Cal/serving <Link type="classic">See details</Link>
        </Text>
      </div>
      <div className={styles.badges}>
        <Badge type="block">30g Of Protien</Badge>
        <Badge type="block">Air Frayer Instructions</Badge>
      </div>
    </div>
  );
}
