import styles from "./styles.module.css";
import { Text } from "@/components";
import eye_open from "@/assets/icons/open_eye.svg";
import eye_closed from "@/assets/icons/close_eye.svg";
import { useState } from "react";

type InputProps = {
  label?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function Input({ label, ...rest }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = rest.type === "password";
  const isPhoneType = rest.type === "phone";
  const isOtp = rest.type === "otp";

  if (isOtp) return <h2>i am otp input !</h2>;

  if (isPhoneType)
    return (
      <div>
        <label className={styles.label}>
          <Text>{label}</Text>
          <div className={styles.phone_input_wrapper}>
            <select className={styles.select} {...rest}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <input
              placeholder="Enter phone number"
              className={styles.input}
              {...rest}
              type={
                isPasswordType
                  ? showPassword
                    ? "text"
                    : "password"
                  : rest.type
              }
            />
          </div>
        </label>
      </div>
    );
  if (!isPhoneType)
    return (
      <div>
        <label className={styles.label}>
          <Text>{label}</Text>
          <div className={styles.input_wrapper}>
            <input
              className={styles.input}
              {...rest}
              type={
                isPasswordType
                  ? showPassword
                    ? "text"
                    : "password"
                  : rest.type
              }
            />
            {isPasswordType && (
              <img
                onClick={() => setShowPassword((prev) => !prev)}
                src={showPassword ? eye_closed : eye_open}
              />
            )}
          </div>
        </label>
      </div>
    );
}
