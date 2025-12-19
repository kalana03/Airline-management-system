"use client"

import { Bell, Wrench, Eye } from "lucide-react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const schedules = [
  {
    flight: "UL225",
    aircraft: "A320-200",
    origin: "🇱🇰 Sri Lanka ",
    destination: "🇦🇪 Dubai",
    departure: "2025-12-15 14:35",
    arrival: "2025-12-15 18:10",
    status: "On Time",
  },
  {
    flight: "UL406",
    aircraft: "A350-900",
    origin: "Dubai 🇦🇪",
    destination: "Colombo 🇱🇰",
    departure: "2025-12-15 22:10",
    arrival: "2025-12-16 03:00",
    status: "Delayed",
  },
  {
    flight: "UL308",
    aircraft: "A330-300",
    origin: "Colombo 🇱🇰",
    destination: "Singapore 🇸🇬",
    departure: "2025-12-16 08:00",
    arrival: "2025-12-16 14:30",
    status: "Cancelled",
  },
]

export function SchedulesTable() {
  return (
    <Table>
      <TableHeader>
        
        <TableRow>
          <TableHead>Flight</TableHead>
          <TableHead>Aircraft</TableHead>
          <TableHead>Origin</TableHead>
          <TableHead>Destination</TableHead>
          <TableHead>Departure</TableHead>
          <TableHead>Arrival</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Operations</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {schedules.map((s) => (
          <TableRow key={s.flight}>
            <TableCell className="font-medium">{s.flight}</TableCell>
            <TableCell>{s.aircraft}</TableCell>
            <TableCell>{s.origin}</TableCell>
            <TableCell>{s.destination}</TableCell>
            <TableCell>{s.departure}</TableCell>
            <TableCell>{s.arrival}</TableCell>
            <TableCell>
              <Badge
                variant={
                  s.status === "On Time"
                    ? "green"
                    : s.status === "Delayed"
                    ? "secondary"
                    : "destructive"
                }
              >
                {s.status}
              </Badge>
            </TableCell>
            <TableCell className="min-w-[250px] overflow-hidden max-w-[25 0px] text-right">
               <div className="flex justify-end gap-2">
  <Button variant="ghost" size="sm" className="flex items-center gap-1">
    <Eye className="h-4 w-4" />
    View
  </Button>

  <Button variant="green" size="sm" className="flex items-center gap-1">
    <Wrench className="h-4 w-4" />
    Reschedule
  </Button>

  <Button variant="destructive" size="sm" className="flex items-center gap-1">
    <Bell className="h-4 w-4" />
    Cancel Flight
  </Button>
</div>

            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
