import { useDraftOrder } from "../draftOrderContext";
import styles from "./styles.module.css";
import { Text, Header, Link, Button, Counter } from "@/components";

export default function StickyBottom() {
  const { draftOrder, setDraftOrder } = useDraftOrder();

  const handleAmount = (op: "plus" | "minus") => () => {
    setDraftOrder((prev) => {
      let newAmount = +prev.amount;
      if (op === "plus") newAmount = Math.min(+prev.amount + 1, 5);
      if (op === "minus") newAmount = Math.max(1, +prev.amount - 1);

      return { ...prev, amount: String(newAmount) };
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <Header>Everything Bagel Salmon</Header>
        <Text>
          with Salomn <Link type="classic">Edit</Link>
        </Text>
      </div>
      <div className={styles.buttons}>
        <Counter count={draftOrder.amount} handler={handleAmount} />
        <Button>Add — $26.18</Button>
      </div>
    </div>
  );
}
