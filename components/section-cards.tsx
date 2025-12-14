"use client";

import {
  TrendingDownIcon,
  TrendingUpIcon,
  PlaneIcon,
  UsersIcon,
  DollarSignIcon,
  CalendarIcon,
  AirplayIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-4 lg:px-6">
      {/* Total Profit */}
      <Card>
        <CardHeader className="relative">
          <CardDescription>Total Profit</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">$5,250,000</CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 text-xs">
              <TrendingUpIcon className="size-3" />
              +15%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col gap-1 text-sm">
          <div className="flex gap-2 font-medium items-center">
            <DollarSignIcon className="size-4" />
            Total profit increased
          </div>
          <div className="text-muted-foreground">Compared to last year</div>
        </CardFooter>
      </Card>

      {/* Profit This Month */}
      <Card>
        <CardHeader className="relative">
          <CardDescription>Profit This Month</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">$420,000</CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 text-xs">
              <TrendingUpIcon className="size-3" />
              +8%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col gap-1 text-sm">
          <div className="flex gap-2 font-medium items-center">
            <DollarSignIcon className="size-4" />
            Month-to-date profit
          </div>
          <div className="text-muted-foreground">Compared to last month</div>
        </CardFooter>
      </Card>

      {/* Flights Scheduled Today */}
      <Card>
        <CardHeader className="relative">
          <CardDescription>Flights Scheduled Today</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">128</CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 text-xs">
              <TrendingUpIcon className="size-3" />
              +5%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col gap-1 text-sm">
          <div className="flex gap-2 font-medium items-center">
            <PlaneIcon className="size-4" />
            More flights scheduled
          </div>
          <div className="text-muted-foreground">Compared to yesterday</div>
        </CardFooter>
      </Card>

      {/* Total Passengers Today */}
      <Card>
        <CardHeader className="relative">
          <CardDescription>Total Passengers Today</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">3,450</CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 text-xs">
              <TrendingUpIcon className="size-3" />
              +3%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col gap-1 text-sm">
          <div className="flex gap-2 font-medium items-center">
            <UsersIcon className="size-4" />
            Passengers increased
          </div>
          <div className="text-muted-foreground">Compared to yesterday</div>
        </CardFooter>
      </Card>

      {/* Aircrafts in Operation */}
      <Card>
        <CardHeader className="relative">
          <CardDescription>Aircrafts in Operation</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">35</CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 text-xs">
              <TrendingUpIcon className="size-3" />
              +2%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col gap-1 text-sm">
          <div className="flex gap-2 font-medium items-center">
            <AirplayIcon className="size-4" />
            Aircrafts flying today
          </div>
          <div className="text-muted-foreground">Compared to yesterday</div>
        </CardFooter>
      </Card>

      {/* New Bookings */}
      
    </div>
  );
}
