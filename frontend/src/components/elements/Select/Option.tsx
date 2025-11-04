import React from "react";
import { Text } from "@/components";
import checkedIcon from "@/assets/icons/checked_green.svg";
import styles from "./styles.module.css";

type OptionProps = {
  selected: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Option({ children, selected, ...rest }: OptionProps) {
  return (
    <label data-checked={selected} className={styles.option_btn}>
      <Text>{children}</Text>
      {selected && <img src={checkedIcon} alt="checked icon" />}
      <input type="radio" checked={selected} {...rest} />
    </label>
  );
}
