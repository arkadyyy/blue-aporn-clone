import { Text, Header, Button, Input } from "@/components";
import styles from "./styles.module.css";

export default function Otp() {
  return (
    <div className={styles.container} style={{}}>
      <Header>Enter the code</Header>
      <Text size="sm">Enter the 6-digit code sent to +1 {"(650)"} 2137379</Text>
      <form action="">
        <Input type="otp" />
      </form>
      <Button>Submit</Button>
    </div>
  );
}
