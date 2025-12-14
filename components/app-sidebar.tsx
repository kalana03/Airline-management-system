import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Import icons from lucide-react
import {
  LayoutDashboard,
  Users,
  Plane,
  FileText,
  Settings,
} from "lucide-react";

// Sidebar data with relevant titles, URLs, and icons
const data = [
  {
    title: "General",
    url: "/dashboard",
    items: [
      { title: "Dashboard", url: "/dashboard/overview", icon: <LayoutDashboard size={14} /> },
      { title: "Analytics", url: "/dashboard/analytics", icon: <FileText size={14} /> },
    ],
  },
  {
    title: "Employees",
    url: "/employees",
    items: [
      { title: "Pilots", url: "/employees/pilots", icon: <Plane size={14} /> },
      { title: "Cabin Crew", url: "/employees/cabin-crew", icon: <Users size={14} /> },
      { title: "Engineers", url: "/employees/engineers", icon: <Settings size={14} /> },
      { title: "Management", url: "/employees/management", icon: <FileText size={14} /> },
    ],
  },
  {
    title: "Assets",
    url: "/assets",
    items: [
      { title: "Aircraft", url: "/assets/aircraft", icon: <Plane size={14} /> },
      { title: "Components", url: "/assets/components", icon: <FileText size={14} /> },
      { title: "Maintenance Logs", url: "/assets/logs", icon: <FileText size={14} /> },
    ],
  },
  {
    title: "Flights",
    url: "/flights",
    items: [
      { title: "Schedules", url: "/flights/schedules", icon: <FileText size={14} /> },
      { title: "Passengers", url: "/flights/passengers", icon: <Users size={14} /> },
      { title: "Booking", url: "/flights/booking", icon: <FileText size={14} /> },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  
    const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "", // leave empty for fallback initials
    role: "Admin",
  };
  
  return (
    <Sidebar {...props}>
      <div className="flex items-center gap-4 p-4 w-full">
        {/* Left: Logo */}
        <div className="bg-white-600 text-white p-2 rounded-full flex items-center justify-center">
          <Plane size={25} />
        </div>

        {/* Right: Company name and role */}
        <div className="flex flex-col items-start">
          <span className="text-lg font-bold">Emirates</span>
          <span className="text-sm text-gray-400">Admin</span>
        </div>
      </div>

      <SidebarContent>
        {data.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="flex items-center gap-2">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center gap-2">
                        {item.icon} {item.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
            
          </SidebarGroup>
        ))}
      </SidebarContent>

      <div className="flex items-center gap-4 p-4 w-full">
        {/* Left: Avatar */}
        <div className="flex-shrink-0">
          <Avatar className="h-10 w-10 rounded-lg">
            {user.avatar ? (
              <AvatarImage src={user.avatar} alt={user.name} />
            ) : (
              <AvatarFallback className="rounded-lg">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            )}
          </Avatar>
        </div>

        {/* Right: User Info */}
        <div className="flex flex-col justify-center items-start text-sm">
          <span className="font-medium text-white truncate">{user.name}</span>
          <span className="text-xs text-gray-500 truncate">{user.email}</span>
        </div>
      </div>  


      <SidebarRail />
    </Sidebar>
  );
}
