"use client"

import { Eye, Pencil, Wrench } from "lucide-react"

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

const engineers = [
  {
    id: "ENG-301",
    name: "R. Wijesinghe",
    specialty: "Avionics",
    aircraft: "A320 / A330",
    base: "CMB",
    status: "On Duty",
  },
  {
    id: "ENG-327",
    name: "D. Perera",
    specialty: "Powerplant",
    aircraft: "A350",
    base: "DXB",
    status: "On Call",
  },
  {
    id: "ENG-352",
    name: "S. Fernando",
    specialty: "Airframe",
    aircraft: "A320",
    base: "CMB",
    status: "Off Duty",
  },
]

export function EngineerTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Engineer ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Specialty</TableHead>
          <TableHead>Certified Aircraft</TableHead>
          <TableHead>Base</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {engineers.map((engineer) => (
          <TableRow key={engineer.id}>
            <TableCell className="font-medium">
              {engineer.id}
            </TableCell>

            <TableCell>{engineer.name}</TableCell>

            {/* Specialty Badge */}
            <TableCell>
              <Badge
                variant={
                  engineer.specialty === "Avionics"
                    ? "default"
                    : engineer.specialty === "Powerplant"
                    ? "secondary"
                    : "outline"
                }
              >
                {engineer.specialty}
              </Badge>
            </TableCell>

            <TableCell>{engineer.aircraft}</TableCell>
            <TableCell>{engineer.base}</TableCell>

            {/* Status Badge */}
            <TableCell>
              <Badge
                variant={
                  engineer.status === "On Duty"
                    ? "default"
                    : engineer.status === "On Call"
                    ? "secondary"
                    : "outline"
                }
              >
                {engineer.status}
              </Badge>
            </TableCell>

            {/* Actions */}
            <TableCell className="min-w-[100px] overflow-hidden max-w-[100px] text-right">
              <div className="flex justify-end gap-2">
  <Button variant="ghost" size="sm" className="flex items-center gap-1">
    <Eye className="h-4 w-4" />
    View
  </Button>

  <Button variant="outline" size="sm" className="flex items-center gap-1">
    <Wrench className="h-4 w-4" />
    Assign Task
  </Button>
</div>

            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
