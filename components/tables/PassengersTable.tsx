"use client"

import { Eye, Pencil, Trash } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const passengers = [
  {
    passengerId: "PAX001",
    passportNo: "N1234567",
    firstName: "John",
    lastName: "Doe",
    dob: "1989-03-12",
    nationality: "🇱🇰",
    gender: "Male",
  },
  {
    passengerId: "PAX002",
    passportNo: "G7654321",
    firstName: "Jane",
    lastName: "Smith",
    dob: "1995-07-21",
    nationality: "🇬🇧",
    gender: "Female",
  },
  {
    passengerId: "PAX003",
    passportNo: "U9876543",
    firstName: "Ali",
    lastName: "Khan",
    dob: "1981-11-04",
    nationality: "🇦🇪",
    gender: "Male",
  },
]

export function PassengersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Passenger ID</TableHead>
          <TableHead>Passport No</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>First Name</TableHead>
          <TableHead>DOB</TableHead>
          <TableHead>Nationality</TableHead>
          <TableHead>Gender</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {passengers.map((p) => (
          <TableRow key={p.passengerId}>
            <TableCell className="font-medium">{p.passengerId}</TableCell>
            <TableCell>{p.passportNo}</TableCell>
            <TableCell>{p.lastName}</TableCell>
            <TableCell>{p.firstName}</TableCell>
            <TableCell>{p.dob}</TableCell>
            <TableCell>{p.nationality}</TableCell>
            <TableCell>{p.gender}</TableCell>

            {/* Actions */}
            <TableCell className="min-w-[180px] overflow-hidden max-w-[180px] text-right">
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  View
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Pencil className="h-4 w-4" />
                  Edit
                </Button>
                <Button variant="destructive" size="sm" className="flex items-center gap-1">
                  <Trash className="h-4 w-4" />
                  Remove
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
