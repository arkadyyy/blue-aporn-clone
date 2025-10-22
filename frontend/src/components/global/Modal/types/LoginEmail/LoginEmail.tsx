import { Header, Text, Button, Link } from "@/components";
import styles from "./styles.module.css";
export default function LoginEmail() {
  return (
    <div className={styles.container} style={{}}>
      <Header>Welcome back!</Header>
      <div style={{ display: "flex", gap: "6px" }}>
        <Text size="sm">Don’t have an account? </Text>
        <Link size="sm" type="classic" to="">
          Get started
        </Link>
      </div>
      <div>
        <h2>social login</h2>
      </div>
      <hr />
      <div>regular email password login</div>

      <Button>Login</Button>
      <Link to="/">Login with phone number</Link>
    </div>
  );
}
