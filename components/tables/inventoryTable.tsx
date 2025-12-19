"use client"

import { Eye, Pencil, PackagePlus, ArrowRightCircle } from "lucide-react"

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

const inventoryItems = [
  {
    id: "INV-001",
    name: "CFM56 Engine Filter",
    category: "Engine",
    stock: 24,
    status: "In Stock",
    location: "CMB Warehouse",
    lastUpdated: "2025-01-12",
  },
  {
    id: "INV-014",
    name: "A320 Nose Wheel",
    category: "Landing Gear",
    stock: 2,
    status: "Low Stock",
    location: "CMB Hangar",
    lastUpdated: "2025-01-10",
  },
  {
    id: "INV-032",
    name: "Cabin Oxygen Mask",
    category: "Safety",
    stock: 0,
    status: "Out of Stock",
    location: "—",
    lastUpdated: "2025-01-08",
  },
]

export function InventoryTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Item ID</TableHead>
          <TableHead>Item Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Last Updated</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {inventoryItems.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">
              {item.id}
            </TableCell>

            <TableCell>{item.name}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{item.stock}</TableCell>

            <TableCell>
              <Badge
                variant={
                  item.status === "In Stock"
                    ? "green"
                    : item.status === "Low Stock"
                    ? "secondary"
                    : "destructive"
                }
              >
                {item.status}
              </Badge>
            </TableCell>

            <TableCell>{item.location}</TableCell>
            <TableCell>{item.lastUpdated}</TableCell>

            {/* Actions */}
            <TableCell className=" text-right max-w-[180px] overflow-hidden max-w-[180px]">
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  View
                </Button>

                

                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <PackagePlus className="h-4 w-4" />
                  Order
                </Button>

                <Button variant="default" size="sm" className="flex items-center gap-1">
                  <ArrowRightCircle className="h-4 w-4" />
                  Allocate
                </Button>
              </div>


            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
