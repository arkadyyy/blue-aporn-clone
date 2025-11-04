import { Header, Text, Button, Link, Input } from "@/components";
import styles from "./styles.module.css";
import gmailIcon from "@/assets/icons/gmail.svg";
import appleIcon from "@/assets/icons/apple.svg";
import facebookIcon from "@/assets/icons/facebook.svg";
import { useActionState, useEffect } from "react";
import { useModalStore } from "@/store/useModalStore";

async function loginAction(prevState, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // Simulate server check
  await new Promise((r) => setTimeout(r, 2000));
  // TODO - set user data to global state here

  // remove this after TODO is done
  if (email !== "test@example.com" || password !== "123456") {
    return {
      success: false,
      error: "please check your login information and try again",
    };
  }

  return { success: true, error: null };
}

export default function LoginEmail() {
  const initialState = { error: null, success: false };
  const [state, formAction, pending] = useActionState(
    loginAction,
    initialState
  );
  const { close, changeType } = useModalStore();

  useEffect(() => {
    if (state.success) {
      close();
    }
  }, [state]);

  return (
    <div className={styles.container}>
      <Header>Welcome back!</Header>
      <div style={{ display: "flex", gap: "6px" }}>
        <Text size="sm">Don’t have an account? </Text>
        <Link
          size="sm"
          type="classic"
          onClick={() => {
            changeType("signup");
          }}
        >
          Get started
        </Link>
      </div>

      <div className={styles.social_container}>
        <div className={styles.social_btn}>
          <img src={gmailIcon} />
        </div>
        <div className={styles.social_btn}>
          <img src={appleIcon} />
        </div>
        <div className={styles.social_btn}>
          <img src={facebookIcon} />
        </div>
      </div>
      {/* hr -- line break */}
      <div className={styles.hr}>
        <span>
          <Text>or</Text>
        </span>
      </div>

      <form className={styles.form} action={formAction}>
        {state.error && (
          <Text>Please check your login information and try again.</Text>
        )}
        <Input type="email" label="Email" name="email" />
        <div
          style={{
            position: "relative",
            marginBottom: "2rem",
          }}
        >
          <Input type="password" label="Password" name="password" />
          <Text
            style={{
              fontSize: "0.9em",
              position: "absolute",
              bottom: "-1rem",
            }}
          >
            Forgot your password? Reset it <Link type="classic">here.</Link>
          </Text>
        </div>
        <Button disabled={pending} type="submit">
          Login
        </Button>
      </form>
      <Link style={{ margin: "2rem" }} to="/">
        Login with phone number
      </Link>
    </div>
  );
}
