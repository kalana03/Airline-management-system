"use client"

import { ArrowUpRight, UserPlus, Pencil } from "lucide-react"

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

const cabinCrew = [
  {
    id: "CC-2011",
    name: "A. Jayasinghe",
    position: "Purser",
    qualifiedAircraft: "A320 / A330",
    base: "CMB",
    status: "Active",
  },
  {
    id: "CC-2045",
    name: "M. Fernando",
    position: "Senior FA",
    qualifiedAircraft: "A320",
    base: "CMB",
    status: "Standby",
  },
  {
    id: "CC-2099",
    name: "N. Perera",
    position: "Flight Attendant",
    qualifiedAircraft: "A320 / A350",
    base: "DXB",
    status: "On Leave",
  },
]

export function CabinCrewTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Crew ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Position</TableHead>
          <TableHead>Qualified Aircraft</TableHead>
          <TableHead>Base</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {cabinCrew.map((crew) => (
          <TableRow key={crew.id}>
            <TableCell className="font-medium">{crew.id}</TableCell>
            <TableCell>{crew.name}</TableCell>

            {/* Position */}
            <TableCell>
              <Badge
                variant={
                  crew.position === "Purser"
                    ? "default"
                    : crew.position === "Senior FA"
                    ? "secondary"
                    : "outline"
                }
              >
                {crew.position}
              </Badge>
            </TableCell>

            <TableCell>{crew.qualifiedAircraft}</TableCell>
            <TableCell>{crew.base}</TableCell>

            {/* Status */}
            <TableCell>
              <Badge
                variant={
                  crew.status === "Active"
                    ? "default"
                    : crew.status === "Standby"
                    ? "secondary"
                    : "destructive"
                }
              >
                {crew.status}
              </Badge>
            </TableCell>

            {/* Actions */}
            <TableCell className="min-w-[150px] overflow-hidden max-w-[150px] text-right">
              <div className="flex gap-2 justify-end">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <UserPlus className="h-4 w-4" />
                  Assign
                </Button>

                <Button variant="green" size="sm" className="flex items-center gap-1">
                  <ArrowUpRight className="h-4 w-4" />
                  Promote
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
