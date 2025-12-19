"use client"

import { Eye, Calendar, UserCheck } from "lucide-react"

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
    license: "ATPL-SL-4521",
    rank: "Captain",
    fleet: "A320 Family",
    base: "CMB",
    status: "On Duty",
    nextFlight: "UL225",
  },
  {
    id: "P-1087",
    name: "S. Fernando",
    license: "CPL-SL-3987",
    rank: "First Officer",
    fleet: "A330",
    base: "CMB",
    status: "Off Duty",
    nextFlight: "-",
  },
  {
    id: "P-1121",
    name: "N. Silva",
    license: "TRN-SL-7742",
    rank: "Trainee",
    fleet: "A350",
    base: "DXB",
    status: "On Leave",
    nextFlight: "-",
  },
]

export function PilotTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Pilot ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>License No</TableHead>
          <TableHead>Rank</TableHead>
          <TableHead>Fleet Rating</TableHead>
          <TableHead>Base</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Next Assignment</TableHead>
          <TableHead className="text-right">Operations</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {pilots.map((pilot) => (
          <TableRow key={pilot.id}>
            <TableCell className="font-medium">{pilot.id}</TableCell>
            <TableCell>{pilot.name}</TableCell>
            <TableCell className="font-mono text-sm">{pilot.license}</TableCell>

            {/* Rank */}
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

            <TableCell>{pilot.fleet}</TableCell>
            <TableCell>{pilot.base}</TableCell>

            {/* Duty Status */}
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

            <TableCell>{pilot.nextFlight}</TableCell>

            {/* Operations Buttons */}
            <TableCell className="max-w-[224px] text-right">
              <div className="flex  justify-end gap-2">
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4 mr-1" />
                  Profile
                </Button>

                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  Schedule
                </Button>

                <Button variant="secondary" size="sm">
                  <UserCheck className="h-4 w-4 mr-1" />
                  Assign
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
