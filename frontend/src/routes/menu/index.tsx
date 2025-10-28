import MenuHero from "@/components/menu/menuHero/MenuHero";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/menu/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <MenuHero/>;
}
