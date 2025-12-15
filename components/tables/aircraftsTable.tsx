"use client"

import { Pencil, Wrench, DollarSign } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const aircrafts = [
  {
    id: "4R-ALS",
    model: "A320-200",
    status: "Active",
    location: "CMB",
    nextFlight: "UL225",
    departure: "14:35",
  },
  {
    id: "4R-ALM",
    model: "A330-300",
    status: "Maintenance",
    location: "CMB",
    nextFlight: "-",
    departure: "-",
  },
  {
    id: "4R-ALN",
    model: "A350-900",
    status: "Scheduled",
    location: "DXB",
    nextFlight: "UL406",
    departure: "22:10",
  },
]

export function AircraftTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Aircraft ID</TableHead>
          <TableHead>Model</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Current Location</TableHead>
          <TableHead>Next Flight</TableHead>
          <TableHead>Scheduled Departure</TableHead>
          <TableHead className="w-48 text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {aircrafts.map((aircraft) => (
          <TableRow key={aircraft.id}>
            <TableCell className="font-medium">{aircraft.id}</TableCell>
            <TableCell>{aircraft.model}</TableCell>

            <TableCell>
              <Badge
                variant={
                  aircraft.status === "Active"
                    ? "default"
                    : aircraft.status === "Maintenance"
                    ? "destructive"
                    : "secondary"
                }
              >
                {aircraft.status}
              </Badge>
            </TableCell>

            <TableCell>{aircraft.location}</TableCell>
            <TableCell>{aircraft.nextFlight}</TableCell>
            <TableCell>{aircraft.departure}</TableCell>

            {/* Actions */}
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button variant="destructive" size="sm" className="flex items-center gap-1">
                  <Wrench className="h-4 w-4" />
                  Maintenance
                </Button>

                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  Sell
                </Button>

                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Pencil className="h-4 w-4" />
                  Edit
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
