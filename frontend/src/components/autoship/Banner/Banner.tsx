import { Button, Header, Text } from "@/components";
import styles from "./styles.module.css";
import bannerImg from "@/assets/img/autoship-landing-page-desktop.png";
export default function Banner() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Header size="md">Autoship & Save</Header>
          <Header size="md">
            Get ahead of meal planning with a level of flexibility you won’t get
            anywhere else
          </Header>
          <Text size="lg">You save 5% on every order</Text>
          <Button>Get started</Button>
        </div>
      </div>
      <img
        className={styles.banner}
        src={bannerImg}
        alt="banner autoship image"
      />
    </>
  );
}
