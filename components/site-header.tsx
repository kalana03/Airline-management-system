import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { CirclePlus, Download } from "lucide-react"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { AddAircraftForm } from './forms/AddAircraftForm'
import { AddInventoryForm } from './forms/AddInventoryForm'
import { AddPilotForm } from './forms/AddPilotForm'
import { AddCabinCrewForm } from './forms/AddCabinCrewForm'
import { AddEngineerForm } from './forms/AddEngineerForm'
import { AddScheduleForm } from './forms/AddScheduleForm'

type sectionHeaderProps = {
  title?: string;
}
import { Button } from './ui/button';

function renderDrawerContent(title?: string) {
  switch (title) {
    case "Aircrafts":
      return <AddAircraftForm />
    case "Inventory":
      return <AddInventoryForm />
    case "Pilots":
      return <AddPilotForm />
    case "Cabin Crew":
      return <AddCabinCrewForm />
    case "Engineers":
      return <AddEngineerForm />
    case "Schedules":
      return <AddScheduleForm />
    // case "Fuel":
    //   return <div>Fuel Form Component</div>
    // case "Catering":
    //   return <div>Catering Form Component</div>
    default:
      return <div>Default Form Component</div>
  }
}

export function SiteHeader({ ...props }: sectionHeaderProps) {

  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center justify-between gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="flex items-center">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          <h1 className="text-base font-medium">{props.title || "Documents"}</h1>
        </div>
        <div className="flex gap-2">
          {(props.title != "Bookings" && props.title != "Passengers") && (
            <Drawer>
              <DrawerTrigger asChild>
                <Button>
                  <CirclePlus className="mr-2 h-4 w-4" />
                  Add New
                </Button>
              </DrawerTrigger>

              <DrawerContent>

                <div className="px-4 pb-6">
                  {renderDrawerContent(props.title)}
                </div>
              </DrawerContent>
            </Drawer>)}
          <Button size="default" variant="outline">
            <Download size="lg" /> Export to PDF
          </Button>
        </div>
      </div>
    </header>
  )
}
