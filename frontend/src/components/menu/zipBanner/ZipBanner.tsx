import styles from "./styles.module.css";
import locationPin from "@/assets/svg/locationPin.svg";
import ZipCode from "./zipCode/ZipCode";
import Text from "@/components/elements/Text/Text";

export default function ZipBanner() {
    return (
        <div className={styles.banner}>
            <div className={styles.inner}>
                <div className={styles.icon}>
                    <img src={locationPin} alt="Blue Apron logo" />

                </div>

                <Text>Enter your zip code to see delivery dates</Text>
                <ZipCode />


            </div>
        </div>
    )
}
