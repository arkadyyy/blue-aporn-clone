import React from "react";
import styles from "./styles.module.css";
import Text from "../Text/Text";

type Size = "sm" | "md" | "lg";
type Align = "left" | "center" | "right";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
    inputSize?: Size;
    align?: Align;
    round?: boolean;
    className?: string;
};

export default function Input({
    label,
    error,
    inputSize = "md",
    align = "left",
    round = false,
    className = "",
    ...rest
}: InputProps) {
    const cls = [
        styles.input,
        styles[`size_${inputSize}`],
        styles[`align_${align}`],
        round ? styles.round : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={styles.wrapper}>
            {label && (
                <Text as="label" size="sm" weight="medium" className={styles.label}>
                    {label}
                </Text>
            )}

            <input className={cls} {...rest} />

            {error && (
                <Text as="p" size="sm" weight="regular" className={styles.error}>
                    {error}
                </Text>
            )}
        </div>
    );
}
