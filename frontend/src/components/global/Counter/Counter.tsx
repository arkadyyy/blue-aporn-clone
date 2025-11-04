import styles from "./styles.module.css";
import { Text } from "@/components";
export default function Counter({
  handler,
  count,
}: {
  handler(op: string): () => void;
  count: string | number;
}) {
  return (
    <div className={styles.container}>
      <button onClick={handler("minus")}>-</button>
      <Text weight="medium" size="xl">
        {count}
      </Text>
      <button onClick={handler("plus")}>+</button>
    </div>
  );
}
