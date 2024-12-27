import { HomeIcon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "./ui/sidebar";
import { NavLink } from "react-router";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navMenu = [
  {
    title: "Home",
    link: "/",
    icon: HomeIcon,
  },
];

function AppSidebar() {
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader
        className={cn("flex justify-center h-16", !open ? "items-center" : "")}
      >
        <NavLink to="/" className="flex items-center">
          {open ? (
            <span className="text-2xl font-bold">Fuelgram</span>
          ) : (
            <span className="text-4xl font-bold">F</span>
          )}
        </NavLink>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navMenu.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={cn("", open ?? "flex items-center justify-center")}
                >
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "",
                      open ?? "flex items-center justify-center"
                    )}
                  >
                    <NavLink to={item.link}>
                      <item.icon
                        className={cn(
                          "transition-all duration-200",
                          open ? "!size-7" : "!size-6"
                        )}
                      />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
      {open && (
        <SidebarFooter>
          <Button className="w-full" variant="outline">
            <span>use</span>
            <kbd className="select-none items-center  rounded border bg-muted px-1.5 font-mono font-medium ">
              <span className="text-xs">ctrl</span>
            </kbd>
            <span>+</span>
            <kbd className="select-none items-center rounded border bg-muted px-1.5 font-mono font-medium">
              <span className="text-xs">b</span>
            </kbd>
            <span>to to toggle</span>
          </Button>
        </SidebarFooter>
      )}
    </Sidebar>
  );
}

export default AppSidebar;
