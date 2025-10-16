import React from "react";
import styles from "./styles.module.css";

type HeaderSize = "sm" | "md" | "lg" | "xl";
type HeaderWeight = "regular" | "medium" | "bold";

type HeaderProps<T extends React.ElementType = "h2"> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
  size?: HeaderSize;
  weight?: HeaderWeight;
} & React.ComponentPropsWithoutRef<T>;

export default function Header<T extends React.ElementType = "h2">({
  as,
  children,
  className = "",
  size = "md",
  weight = "regular",
  ...rest
}: HeaderProps<T>) {
  const Component = as || "h2";

  const classes = [
    styles.header,
    styles[`size_${size}`],
    styles[`weight_${weight}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}
