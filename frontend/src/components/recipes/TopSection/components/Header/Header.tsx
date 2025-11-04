import { Text, Header as HeaderText, Badge } from "@/components";
import styles from "./styles.module.css";
export default function Header() {
  return (
    <div className={styles.container}>
      <Text>CUSTOMIZE IT</Text>
      <HeaderText>Everything Bagel Salmon</HeaderText>
      <Text>with Roasted Potatoes & Cucumber Dill Salad</Text>
      <Badge>Active:30m</Badge>
      <Badge>Total: 30m</Badge>
      <Text>
        This dish highlights rich, crispy-skin salmon fillets which you'll coat
        in classic everything bagel seasonings like sesame seeds, poppy seeds,
        and dried garlic and onion, before topping with a tangy caper-lemon sour
        cream. You'll serve the salmon with a crunchy cucumber salad featuring
        fresh dill and peppery shallot.
      </Text>
      <Text>$13.09/serving</Text>
    </div>
  );
}
