import { useState } from "react";
import styles from "./styles.module.css";
import Input from "@/components/elements/Input/Input";
export default function ZipCode() {
  const [zip, setZip] = useState("");

  return (
    <div className={styles.zipInput}>
      <Input
        type="text"
        placeholder="Enter zip code"
        value={zip}
        onChange={(e) =>
          setZip(e.target.value.replace(/\D/g, "").slice(0, 5))
        }
        inputSize="md"
        align="center"
      />

    </div>
  );
}
