import {
  MembershipBanner,
  MembershipFaq,
  MembershipPerks,
  MobileSignup,
} from "@/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/membership/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <MembershipBanner />
      <MembershipPerks />
      <MembershipFaq />
      <MobileSignup />
    </>
  );
}
