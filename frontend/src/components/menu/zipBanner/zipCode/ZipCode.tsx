import { useState } from "react";
import styles from "./styles.module.css";
import Input from "@/components/elements/Input/Input";
import hevronRight from "@/assets/svg/hevronRight.svg";
import Button from "@/components/elements/Button/Button";

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
      {zip.length === 5 &&
        <Button type="primary" round
          onClick={() => console.log("ZIP submitted: shouild be save under local_storage and change the UI till force deleting from there", zip)}

        >
          <img src={hevronRight} alt="Blue Apron logo" />
        </Button>
      }
    </div>

  );
}
