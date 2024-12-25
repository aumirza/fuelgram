import { SidebarProvider } from "./ui/sidebar";
import AppSidebar from "./AppSidebar";
import { Outlet } from "react-router";
import Header from "./Header";

function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full bg-accent">
        <Header />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default Layout;
