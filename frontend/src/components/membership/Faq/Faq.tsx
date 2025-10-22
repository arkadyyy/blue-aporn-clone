import styles from "./styles.module.css";
import { Accordion, Button, Header, Link, Text } from "@/components";

const faq = [
  {
    header: "What is the Blue Apron+ Membership?",
    text: "With Blue Apron+, you get free shipping on all orders, free membership to Tastemade+ where you can stream unlimited food, travel, and home shows, and exclusive access to member only items, experiences, and perks. Blue Apron+ is $9.99 per month, meaning it pays for itself in just one order. ",
  },
  {
    header: "How do I sign up for Blue Apron+?",
    text: "Head to the Blue Apron+ page and click ‘Start your 30-day free trial’ to sign up. If you’ve used Blue Apron+ in the past, you can always restart your membership in your account settings. ",
  },
  {
    header: "Do you offer a free trial of the Blue Apron+ membership?",
    text: "You can try out a Blue Apron+ membership for 30 days by following the link on the Blue Apron+ page, and you can cancel or restart your membership at any time in your account settings. ",
  },
  {
    header: "Can I cancel my Blue Apron+ membership at any time?",
    text: "To cancel your Blue Apron+ membership, head to your 'Account' and select 'Blue Apron+' from the menu. Next, click 'Cancel Membership' at the bottom of the screen and follow the prompts to complete your cancellation. ",
  },
];

export default function Faq() {
  return (
    <div className={styles.container}>
      <Header>FAQs</Header>
      {faq.map((sec) => (
        <Accordion type="light" data={sec} />
      ))}
      <Text style={{ margin: "2rem 0" }} size="sm">
        For more information on Blue Apron+ membership, view our full list of
        FAQs{" "}
        <Link type="classic" style={{ display: "inline" }} to="/">
          here
        </Link>
        .
      </Text>
    </div>
  );
}
