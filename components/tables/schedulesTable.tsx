"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const schedules = [
  {
    flight: "UL225",
    aircraft: "A320-200",
    origin: "Sri Lanka 🇱🇰",
    destination: "Dubai 🇦🇪",
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
          <TableHead className="text-right"></TableHead>
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
                    ? "default"
                    : s.status === "Delayed"
                    ? "secondary"
                    : "destructive"
                }
              >
                {s.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button variant="outline" size="sm">
                Reschedule
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
