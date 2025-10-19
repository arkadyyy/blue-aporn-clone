import {
  AutoshipBanner,
  AutoshipFaq,
  AutoshipHowItWorks,
  MobileSignup,
} from "@/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/autoship/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <AutoshipBanner />
      <AutoshipHowItWorks />
      <AutoshipFaq />
      {/* TODO - change background-color  for mobile signup */}
      <MobileSignup />
    </div>
  );
}
