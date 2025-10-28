import styles from "./styles.module.css";
import locationPin from "@/assets/svg/locationPin.svg";

export default function ZipBanner() {
    return (
        <div className={styles.banner}>
            <div className={styles.inner}>
                <div className={styles.icon}>
<img src={locationPin} alt="Blue Apron logo" />

                </div>

                <div className={styles.text}>Enter your zip code to see delivery dates</div>


            </div>
        </div>
    )
}
