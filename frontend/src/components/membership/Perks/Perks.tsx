import perk_svg from "@/assets/svg/perk.svg";
import tastemade_svg from "@/assets/svg/tastemade.svg";
import shipping_svg from "@/assets/svg/shipping.svg";
import styles from "./styles.module.css";
import Header from "@/components/elements/Header/Header";
import Text from "@/components/elements/Text/Text";
import { useIsMobile } from "@/hooks";

const perks = [
  {
    img: perk_svg,
    header: "Exclusive members-only perks",
    text: "Promotions and experiences you won’t find anywhere else.",
    id: crypto.randomUUID(),
  },
  {
    img: tastemade_svg,
    header: "Unlimited access to Tastemade+",
    text: "Award-winning food shows and so much more. $49.99 value",
    id: crypto.randomUUID(),
  },
  {
    img: shipping_svg,
    header: "Free Shipping on every order.",
    text: "At $0.00/month, Blue Apron+ pays for itself in just one order.",
    id: crypto.randomUUID(),
  },
];

function Perk({ perk }: { perk: (typeof perks)[0] }) {
  const isMobile = useIsMobile();
  return (
    <div className={styles.perk_container}>
      <img src={perk.img} alt={`perk ${perk.header} image`} />
      <div>
        <Text
          size="md"
          style={{ marginBlock: isMobile ? "0rem" : "", fontWeight: "500" }}
        >
          {perk.header}
        </Text>
        <Text>{perk.text}</Text>
      </div>
    </div>
  );
}
export default function Perks() {
  return (
    <div className={styles.container}>
      <div className={styles.perks_container}>
        {perks.map((perk) => (
          <Perk key={perk.id} perk={perk} />
        ))}
      </div>
      <div className={styles.price_perk}>
        <Header>Just $0.00/month</Header>
        <Text>Membership pays for itself in just 1 order.</Text>
      </div>
    </div>
  );
}
