import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/global/Navbar/Navbar";
import "../index.css";
import { Drawer, Footer } from "@/components";
import { DrawerProvider } from "@/components/global/Drawer/DrawerContext";
import Modal from "@/components/global/Modal/Modal";

const RootLayout = () => {
  return (
    <>
      <DrawerProvider>
        <Navbar />
        <Drawer />
      </DrawerProvider>
      <Modal />

      <Outlet />

      <TanStackRouterDevtools />

      <Footer />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
