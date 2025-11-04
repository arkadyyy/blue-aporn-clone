import { Text, Header, Button } from "@/components";
import styles from "./styles.module.css";

export default function AccountExsists() {
  return (
    <div className={styles.container} style={{}}>
      <Header>An account with this phone number already exsists</Header>
      <Text size="sm">
        you can now use your Wonder account to order with Blue Apron.Share login
        and account information across apps!
      </Text>
      <Button>Login with Wonder account</Button>
    </div>
  );
}
