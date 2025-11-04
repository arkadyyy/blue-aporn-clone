import styles from "./styles.module.css";
import { Text, Header } from "@/components";
import leftArrow from "@/assets/svg/blue_left.svg";
import rightArrow from "@/assets/svg/blue_right.svg";

export default function Instructions() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header>Instructions</Header>
        <div className={styles.navigator}>
          <button>
            <img style={{ width: "22rem", height: "22rem" }} src={leftArrow} />
          </button>
          <Text>1 of 3</Text>
          <button>
            <img src={rightArrow} />
          </button>
        </div>
      </div>
      <div className={styles.instruction}>
        <div className={styles.text}>
          <Text>STEP 1</Text>
          <Text size="xl">Prepare & roast the potatoes</Text>
          <Text size="lg">
            Preheat the oven to 450°F. Wash and dry the fresh produce. Line a
            sheet pan with foil. Medium dice the potatoes. Place on the sheet
            pan; drizzle with olive oil and season with salt and pepper. Toss to
            coat and arrange in an even layer. Roast 20 to 24 minutes, or until
            brown​ed and tender when pierced with a fork. Remove from the oven.
            Air Fryer: Cook the potatoes at 400°F for 12 to 15 minutes.
          </Text>
        </div>
        <div className={styles.img}>
          <img
            src={
              "https://rfprodv2-ba-image.azureedge.net/image/origin/blueapron/90584f26-cb64-4176-9906-47d5af91fd7e.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}
