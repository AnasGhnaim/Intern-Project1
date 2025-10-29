import { Outlet, createRootRoute } from "@tanstack/react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  ),
});
