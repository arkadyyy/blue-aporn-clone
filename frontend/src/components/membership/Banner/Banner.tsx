import styles from "./styles.module.css";
import bannerImg from "@/assets/img/membership_landing_page_banner.png";
import apronImg from "@/assets/img/apron.png";
import Header from "@/components/elements/Header/Header";
import Button from "@/components/elements/Button/Button";
export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img src={bannerImg} alt="memebership banner image" />
        <img src={apronImg} alt="apron plus image" />
        <div className={styles.banner_text}>
          <Header size="md">
            Free shipping and so <span>much more.</span>
          </Header>
          <Button hoverEffect>Sign up for Blue Apron+</Button>
        </div>
      </div>
    </div>
  );
}
