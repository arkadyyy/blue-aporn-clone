import { Button, Header, Text } from "@/components";
import styles from "./styles.module.css";
import bannerImg from "@/assets/img/autoship-landing-page-desktop.png";
export default function Banner() {
  return (
    <div className={styles.container}>
      <Header>Autoship & Save</Header>
      <Header>
        Get ahead of meal planning with a level of flexibility you won’t get
        anywhere else
      </Header>
      <Text>You save 5% on every order</Text>
      <Button>Get started</Button>
      <img src={bannerImg} alt="banner autoship image" />
    </div>
  );
}
