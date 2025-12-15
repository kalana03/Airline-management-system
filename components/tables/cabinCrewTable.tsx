"use client"

import { Eye, Pencil } from "lucide-react"

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
    id: "CC-201",
    name: "A. Jayasinghe",
    role: "Purser",
    base: "CMB",
    status: "On Duty",
  },
  {
    id: "CC-224",
    name: "R. Fernando",
    role: "Senior Crew",
    base: "CMB",
    status: "Off Duty",
  },
  {
    id: "CC-256",
    name: "M. Silva",
    role: "Cabin Crew",
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
          <TableHead>Role</TableHead>
          <TableHead>Base</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {cabinCrew.map((crew) => (
          <TableRow key={crew.id}>
            <TableCell className="font-medium">
              {crew.id}
            </TableCell>

            <TableCell>{crew.name}</TableCell>

            {/* Role Badge */}
            <TableCell>
              <Badge
                variant={
                  crew.role === "Purser"
                    ? "default"
                    : crew.role === "Senior Crew"
                    ? "secondary"
                    : "outline"
                }
              >
                {crew.role}
              </Badge>
            </TableCell>

            <TableCell>{crew.base}</TableCell>

            {/* Status Badge */}
            <TableCell>
              <Badge
                variant={
                  crew.status === "On Duty"
                    ? "default"
                    : crew.status === "Off Duty"
                    ? "secondary"
                    : "destructive"
                }
              >
                {crew.status}
              </Badge>
            </TableCell>

            {/* Actions */}
            <TableCell className="text-right">
              <div className="flex justify-end gap-1">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Pencil className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
