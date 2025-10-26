import MenuTopSlider from "@/components/menu/MenuTopSlider";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/menu/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <MenuTopSlider/>;
}
