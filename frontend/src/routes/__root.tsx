import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/global/Navbar/Navbar";
import "../index.css";
const RootLayout = () => (
  <>
    <Navbar />
    <div className="body-container">
      <Outlet />
    </div>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
