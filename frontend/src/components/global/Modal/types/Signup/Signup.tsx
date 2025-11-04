import { Header, Text, Button, Link, Input } from "@/components";
import styles from "./styles.module.css";
import { useActionState, useEffect } from "react";
import { useModalStore } from "@/store/useModalStore";

async function loginAction(prevState, formData: FormData) {
  // const email = formData.get("email");
  // const password = formData.get("password");
  // const firstName = formData.get("first_name");
  // const lastName = formData.get("last_name");
  // const phone = formData.get("phone")

  // Simulate server check
  await new Promise((r) => setTimeout(r, 2000));
  // TODO - determine if move to next section or error occured

  // remove this after TODO is done

  return { success: true, error: null };
}

export default function Signup() {
  const initialState = { error: null, success: false };
  const [state, formAction, pending] = useActionState(
    loginAction,
    initialState
  );
  const { changeType } = useModalStore();

  const handleGoogleLogin = () => {
    console.log("shalom");
    const GOOGLE_AUTH_URL =
      "https://accounts.google.com/o/oauth2/v2/auth?" +
      new URLSearchParams({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        redirect_uri:
          import.meta.env.VITE_API_BASE_URL + "/auth/google/callback", // your backend route
        response_type: "code",
        scope: "openid email profile",
        access_type: "offline",
        prompt: "consent",
      }).toString();

    window.location.href = GOOGLE_AUTH_URL;
  };

  useEffect(() => {
    if (state.success) {
      changeType("otp");
    }
    // if ((state.error!.phone = "phone already exsists")) {
    //   //TODO - change the error
    //   changeType("account-exsists");
    // }
  }, [state]);

  return (
    <div className={styles.container} style={{}}>
      <Header>Create an account</Header>
      <Button onClick={() => handleGoogleLogin()}>google signup</Button>
      <Text size="sm">
        Have an account ?{" "}
        <Link
          size="sm"
          type="classic"
          onClick={() => {
            changeType("login-email");
          }}
        >
          Login
        </Link>
      </Text>

      <form className={styles.form} action={formAction}>
        {state.error && (
          <Text>Please check your login information and try again.</Text>
        )}
        <Input type="text" label="First Name" name="first_name" />
        <Input type="text" label="Last Name" name="last_name" />
        <Input type="email" label="Email" name="email" />

        <Input type="password" label="Password" name="password" />
        <Text
          size="sm"
          style={{ color: "gray", top: "-1rem", position: "relative" }}
        >
          Password must be 8 to 25 characters and include numbers and letters.
        </Text>

        <Input type="phone" label="Phone" name="phone" />

        <Text
          size="sm"
          style={{ color: "gray", top: "-1rem", position: "relative" }}
        >
          By creating an account, you agree to the{" "}
          <Link style={{ display: "inline", fontSize: "1em" }}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link style={{ display: "inline", fontSize: "1em" }}>
            Privacy Policy.
          </Link>
        </Text>
        <Button disabled={pending} type="submit">
          Continue
        </Button>
      </form>
    </div>
  );
}
