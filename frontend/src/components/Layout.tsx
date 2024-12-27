import { SidebarProvider } from "./ui/sidebar";
import AppSidebar from "./AppSidebar";
import { Outlet } from "react-router";
import Header from "./Header";

function Layout() {
  return (
    <SidebarProvider
      style={{
        // "--sidebar-width": "20rem",
        "--sidebar-width-icon": "3.5rem",
        // "--sidebar-width-mobile": "20rem",
      }}
    >
      <AppSidebar />
      <main className="w-full bg-accent">
        <Header />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default Layout;
