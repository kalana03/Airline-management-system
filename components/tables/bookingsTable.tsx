"use client"

import { Eye, Trash } from "lucide-react"

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

const bookings = [
  {
    id: "BK001",
    passengerId: "PAX001",
    passenger: "A. Perera",
    flight: "UL225",
    seat: "12A",
    status: "Paid",
    amount: "LKR 45,000",
  },
  {
    id: "BK002",
    passengerId: "PAX002",
    passenger: "S. Fernando",
    flight: "UL406",
    seat: "8C",
    status: "Pending",
    amount: "LKR 62,500",
  },
  {
    id: "BK003",
    passengerId: "PAX003",
    passenger: "N. Silva",
    flight: "UL308",
    seat: "2F",
    status: "Cancelled",
    amount: "LKR 0",
  },
]

export function BookingsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Booking ID</TableHead>
          <TableHead>Passenger ID</TableHead>
          <TableHead>Passenger</TableHead>
          <TableHead>Flight</TableHead>
          <TableHead>Seat</TableHead>
          <TableHead>Payment Status</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {bookings.map((booking) => (
          <TableRow key={booking.id}>
            <TableCell className="font-medium">{booking.id}</TableCell>
            <TableCell className="font-medium">{booking.passengerId}</TableCell>
            <TableCell>{booking.passenger}</TableCell>
            <TableCell>{booking.flight}</TableCell>
            <TableCell>{booking.seat}</TableCell>

            {/* Payment Status */}
            <TableCell className="min-w-[60px] overflow-hidden max-w-[60px]">
              <Badge
                variant={
                  booking.status === "Paid"
                    ? "green"
                    : booking.status === "Pending"
                    ? "secondary"
                    : "destructive"
                }
              >
                {booking.status}
              </Badge>
            </TableCell>

            <TableCell>{booking.amount}</TableCell>

            {/* Actions */}
            <TableCell className="min-w-[80px] overflow-hidden max-w-[80px]">
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  View
                </Button>
                <Button variant="destructive" size="sm" className="flex items-center gap-1">
                  <Trash className="h-4 w-4" />
                  Cancel
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
