import React from "react";
import styles from "./styles.module.css";

type TextSize = "sm" | "md" | "lg" | "xl";
type TextWeight = "regular" | "medium" | "bold";

type TextProps<T extends React.ElementType = "p"> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
  size?: TextSize;
  weight?: TextWeight;
} & React.ComponentPropsWithoutRef<T>;

export default function Text<T extends React.ElementType = "p">({
  as,
  children,
  className = "",
  size = "md",
  weight = "regular",
  ...rest
}: TextProps<T>) {
  const Component = as || "p";

  const classes = [
    styles.text,
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
