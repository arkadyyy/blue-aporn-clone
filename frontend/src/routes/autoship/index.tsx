import { AutoshipBanner, AutoshipFaq, AutoshipHowItWorks } from "@/components";
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
    </div>
  );
}
