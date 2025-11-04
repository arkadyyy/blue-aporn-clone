import React from "react";
import styles from "./styles.module.css";
type SelectProps = {
  orientation?: "row" | "column";
} & React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;
export default function Select({ orientation, children }: SelectProps) {
  return (
    <form
      className={`${styles.select_container} ${orientation === "column" && styles.column}`}
    >
      {children}
    </form>
  );
}
