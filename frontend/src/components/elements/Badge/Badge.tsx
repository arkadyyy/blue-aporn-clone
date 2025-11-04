import React from "react";
import styles from "./styles.module.css";
type BadgeProps = {
  type?: "rounded" | "block";
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export default function Badge({ type = "rounded", children }: BadgeProps) {
  return (
    <div className={styles.container} data-type={type}>
      {children}
    </div>
  );
}
