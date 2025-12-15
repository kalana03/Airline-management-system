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

const pilots = [
  {
    id: "P-1023",
    name: "K. Perera",
    rank: "Captain",
    aircraft: "A320",
    base: "CMB",
    status: "On Duty",
  },
  {
    id: "P-1087",
    name: "S. Fernando",
    rank: "First Officer",
    aircraft: "A330",
    base: "CMB",
    status: "Off Duty",
  },
  {
    id: "P-1121",
    name: "N. Silva",
    rank: "Trainee",
    aircraft: "A350",
    base: "DXB",
    status: "On Leave",
  },
]

export function PilotTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Pilot ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Rank</TableHead>
          <TableHead>Aircraft Type</TableHead>
          <TableHead>Base</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {pilots.map((pilot) => (
          <TableRow key={pilot.id}>
  <TableCell className="font-medium">{pilot.id}</TableCell>
  <TableCell>{pilot.name}</TableCell>

  {/* Rank Badge */}
  <TableCell>
    <Badge
      variant={
        pilot.rank === "Captain"
          ? "default"
          : pilot.rank === "First Officer"
          ? "secondary"
          : "outline"
      }
    >
      {pilot.rank}
    </Badge>
  </TableCell>

  <TableCell>{pilot.aircraft}</TableCell>
  <TableCell>{pilot.base}</TableCell>

  {/* Status Badge */}
  <TableCell>
    <Badge
      variant={
        pilot.status === "On Duty"
          ? "default"
          : pilot.status === "Off Duty"
          ? "secondary"
          : "destructive"
      }
    >
      {pilot.status}
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
