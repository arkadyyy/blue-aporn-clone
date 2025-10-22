import styles from "./styles.module.css";
import { Accordion, Button, Header, Link, Text } from "@/components";

const faq = [
  {
    header: "What is Autoship and how does it work?",
    text: "With Autoship & Save, you can set up recurring deliveries on a schedule that works for you and save 5% on every order.  ",
  },
  {
    header: "How do I set up recurring deliveries with Autoship?",
    text: "To enroll in Autoship deliveries, head to your ‘Account’ Page when logged in. From there, tap the ‘Autoship & save’ section. ",
  },
  {
    header: "When will I be charged for my Autoship orders?",
    text: "Autoship orders will be charged once your order cutoff time passes and your order processes. You can see the cutoff time for your Autoship orders on your ‘Orders’ page below each scheduled delivery date.",
  },
  {
    header: "Can I skip an Autoship order?",
    text: "Select the order you want to skip from your ‘Orders’ or ‘Menu’ page. Once there, click 'Manage order’ and then 'Skip.' Follow the prompts to confirm, and once skipped, the order will no longer appear in the Upcoming section of your ‘Orders’ page. ",
  },
  {
    header: "Can I cancel my Autoship deliveries at any time?",
    text: "To cancel Autoship deliveries, head to your 'Account' and select 'Autoship & Save' from the menu. Next, click 'Cancel Plan' at the bottom of the screen and follow the prompts to cancel your recurring orders. ",
  },
];

export default function Faq() {
  return (
    <div className={styles.container}>
      <Header>FAQs</Header>
      {faq.map((sec) => (
        <Accordion type="light" data={sec} />
      ))}
    </div>
  );
}
