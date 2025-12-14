"use client"

import * as React from "react"
import {
  ArrowUpCircleIcon,
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
  Plane,
  Puzzle, 
  UsersRound,
  Wrench,
  TicketsPlane,
  PlaneTakeoff,
  Fuel,
  Utensils
} from "lucide-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Analytics",
      url: "#",
      icon: BarChartIcon,
    },

  ],
  
  
  Assets: [
    {
      name: "Aircrafts",
      url: "/dashboard/assets/Aircrafts",
      icon: Plane,
    },
    {
      name: "Inventory",
      url: "/dashboard/assets/inventory",
      icon: Puzzle,
    },

  ],

  Employees: [
    {
      name: "Pilots",
      url: "#",
      icon: Plane,
    },
    {
      name: "Cabin Crew",
      url: "#",
      icon: UsersRound,
    },
    {
      name: "Engineers",
      url: "#",
      icon: Wrench,
    },
  ],

  Flights: [
    {
      name: "Schedules",
      url: "#",
      icon: PlaneTakeoff,
    },
    {
      name: "Bookings",
      url: "#",
      icon: TicketsPlane,
    },
    {
      name: "Passengers",
      url: "#",
      icon: UsersIcon,
    },
  ],

  Transactions:[
    {
      name: "Fuel Records",
      url: "#",
      icon: Fuel,
    },
    {
      name: "Catering",
      url: "#",
      icon: Utensils,
    },
    {
      name: "Maintainence Docs",
      url: "#",
      icon: FileIcon,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">Emirates Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.Assets} topic="Assets"/>
        <NavDocuments items={data.Employees} topic="Employees"/>
        <NavDocuments items={data.Flights} topic="Flights"/>
        <NavDocuments items={data.Transactions} topic="Documents"/>
        
        
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
