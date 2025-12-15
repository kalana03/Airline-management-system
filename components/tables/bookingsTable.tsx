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

const bookings = [
  {
    id: "BK001",
    passenger: "A. Perera",
    flight: "UL225",
    seat: "12A",
    status: "Paid",
    amount: "LKR 45,000",
  },
  {
    id: "BK002",
    passenger: "S. Fernando",
    flight: "UL406",
    seat: "8C",
    status: "Pending",
    amount: "LKR 62,500",
  },
  {
    id: "BK003",
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
            <TableCell className="font-medium">
              {booking.id}
            </TableCell>

            <TableCell>{booking.passenger}</TableCell>
            <TableCell>{booking.flight}</TableCell>
            <TableCell>{booking.seat}</TableCell>

            {/* Payment Status */}
            <TableCell>
              <Badge
                variant={
                  booking.status === "Paid"
                    ? "default"
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
