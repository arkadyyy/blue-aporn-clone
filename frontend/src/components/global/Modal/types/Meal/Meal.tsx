import {
  Header,
  Text,
  Button,
  Link,
  Input,
  Select,
  Option,
  Badge,
  Counter,
} from "@/components";
import styles from "./styles.module.css";
import { useState } from "react";
import chackedGreenIcon from "@/assets/icons/checked_green.svg";
import apronPlusIcon from "@/assets/img/apron.png";
import { useModalStore } from "@/store/useModalStore";

export default function Meal() {
  const { open } = useModalStore();
  const [servingOpt, setServingOpt] = useState("2");
  const [option, setOption] = useState("with Ground Turkey");
  const [amount, setAmount] = useState(1);

  const handleAmount = (op: "plus" | "minus") => () => {
    setAmount((prev) => {
      if (op === "plus") return Math.min(prev + 1, 5);
      if (op === "minus") return Math.max(1, prev - 1);
      return prev;
    });
  };

  const twoServingsSelected = servingOpt === "2";
  const fourServingsSelected = servingOpt === "4";

  return (
    <div className={styles.container}>
      <img src="https://rfprodv2-ba-image.azureedge.net/image/1886x1258/blueapron/f82f0a46-62a8-4eab-80d4-97dcff6d3c0a.jpg" />
      <div className={styles.content_wrapper}>
        <div className={styles.header_sec}>
          <Text style={{ color: "#5f5b54" }} size="sm" weight="medium">
            CUSTOMIZE IT
          </Text>
          <Header>Everything Bagel Salmon</Header>
          <Text>with Roasted Potatoes & Cucumber Dill Salad</Text>
          <div className={styles.badges_container}>
            <Badge>
              <Text style={{ display: "inline" }}>Active:30m</Text>
            </Badge>
            <Badge>
              <Text style={{ display: "inline" }}>Total:30m</Text>
            </Badge>
            {/* TODO - add vegan/vegeterain/wheat free badges if they exsist on meal */}
          </div>
          <Text weight="medium">$13.09/serving</Text>
        </div>
        <div className={styles.servings_sec}>
          <Text weight="medium">CHOOSE YOUR SEVINGS</Text>
          <Text size="sm">Required</Text>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              margin: "1rem 0",
            }}
          >
            <label
              data-checked={twoServingsSelected}
              className={styles.option_btn}
            >
              <Text>2 Servings</Text>
              <img src={chackedGreenIcon} alt="checked" />
              <input
                type="radio"
                name="servings_option"
                value="2"
                checked={twoServingsSelected}
                onChange={(e) => setServingOpt(e.target.value)}
              />
            </label>

            <label
              data-checked={fourServingsSelected}
              className={styles.option_btn}
            >
              <Text>4 Servings</Text>
              <img src={chackedGreenIcon} alt="checked" />
              <input
                type="radio"
                name="servings_option"
                value="4"
                checked={fourServingsSelected}
                onChange={(e) => setServingOpt(e.target.value)}
              />
            </label>
          </div>
          <div>
            <Text weight="medium">CHOOSE AN OPTION</Text>
            <Text size="sm">Required</Text>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                margin: "1rem 0",
              }}
            >
              <label
                data-checked={option === "with Ground Turkey"}
                className={styles.option_btn}
              >
                <Text>with Ground Turkey</Text>
                <img src={chackedGreenIcon} alt="checked" />
                <input
                  type="radio"
                  name="servings_option"
                  value="with Ground Turkey"
                  checked={option === "with Ground Turkey"}
                  onChange={(e) => setOption(e.target.value)}
                />
              </label>

              <label
                data-checked={option === "with Ground Pork"}
                className={styles.option_btn}
              >
                <Text>with Ground Pork</Text>
                <img src={chackedGreenIcon} alt="checked" />
                <input
                  type="radio"
                  name="servings_option"
                  value="with Ground Pork"
                  checked={option === "with Ground Pork"}
                  onChange={(e) => setOption(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>
        <div className={styles.details_sec}>
          <Text weight="medium">DETAILS</Text>
          <Text size="sm">
            This dish highlights rich, crispy-skin salmon fillets which you'll
            coat in classic everything bagel seasonings like sesame seeds, poppy
            seeds, and dried garlic and onion, before topping with a tangy
            caper-lemon sour cream. You'll serve the salmon with a crunchy
            cucumber salad featuring fresh dill and peppery shallot.
          </Text>
          {/* TODO - badges */}
        </div>
        <div className={styles.nutrition_sec}>
          <Text weight="medium">NUTRITION</Text>

          <Text style={{ cursor: "pointer" }} onClick={() => open("nutrition")}>
            510 cal/serving <span>{">"}</span>
          </Text>
        </div>
        <div className={styles.bottom_sec}>
          <Link
            to={"/recipes/$slug"}
            params={{ slug: "everything-bagel-salmon" }}
            search={{
              cycle_date: "2025-10-27",
              product_id: "7bad12cc-193c-4b21-8c83-cf582772e1b4",
              product_servings: "", // if you need to pass an empty string
              item_id: "489941fb-e715-4344-8f64-39501803a371",
            }}
          >
            Go to Recipe
          </Link>
          <div className={styles.apron_plus}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <img
                src={apronPlusIcon}
                alt="aprn plus"
                style={{ width: "2rem", height: "2rem" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Text size="sm">
                  Blue Apron+ Members get free shipping on this order.
                </Text>
                <Link>Learn more</Link>
              </div>
            </div>
            <hr />
            <div style={{ display: "flex", gap: ".4rem" }}>
              <input type="checkbox" name="" id="" />
              <Text size="sm">Try Blue Apron+ free for 30-days</Text>
            </div>
          </div>
        </div>
        <div className={styles.sticky_sec}>
          <Counter count={amount} handler={handleAmount} />
          <Button>Add — $26.18</Button>
        </div>
      </div>
    </div>
  );
}
