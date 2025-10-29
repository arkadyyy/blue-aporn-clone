import styles from "./styles.module.css";
import locationPin from "@/assets/svg/locationPin.svg";
import ZipCode from "./zipCode/ZipCode";
import Text from "@/components/elements/Text/Text";
import Link from "@/components/elements/Link/Link";

export default function ZipBanner() {
    return (
        <div className={styles.banner}>
            <div className={styles.icon}>
                <img src={locationPin} alt="Blue Apron logo" />
            </div>
            <Text size="xl26">Enter your zip code to see delivery dates</Text>

            <ZipCode />
            <div className={styles.log_in_container}>
                <Text size="lg">or
                </Text>
                <Link type="classic">log in</Link>
            </div>

        </div>
    )
}
