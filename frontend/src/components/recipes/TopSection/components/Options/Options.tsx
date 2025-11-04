import React from "react";
import styles from "./styles.module.css";
import { Text, Option } from "@/components";
import { useDraftOrder } from "@/components/recipes/draftOrderContext";

export default function Options() {
  const { draftOrder, setDraftOrder } = useDraftOrder();

  const handleServingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDraftOrder((prev) => ({ ...prev, servings: e.target.value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.servings}>
        <Text>CHOOSE YOUR SERVINGS</Text>
        <Text>Required</Text>
        <div className={styles.servings_options}>
          <Option
            name="servings"
            value="2"
            selected={draftOrder.servings === "2"}
            onChange={handleServingsChange}
          >
            2 servings
          </Option>

          <Option
            name="servings"
            value="4"
            selected={draftOrder.servings === "4"}
            onChange={handleServingsChange}
          >
            4 servings
          </Option>
        </div>
      </div>

      <div className={styles.option}>
        <Text>CHOOSE AN OPTION</Text>
        <Text>Required</Text>
        <div className={styles.option_options}>
          <Option
            name="variant"
            value="salmon"
            selected={draftOrder.option === "salmon"}
            onChange={(e) =>
              setDraftOrder((prev) => ({ ...prev, option: e.target.value }))
            }
          >
            with Salmon
          </Option>

          <Option
            name="option"
            value="chicken"
            selected={draftOrder.option === "chicken"}
            onChange={(e) =>
              setDraftOrder((prev) => ({ ...prev, option: e.target.value }))
            }
          >
            with Chicken Breasts
          </Option>
        </div>
      </div>
    </div>
  );
}
