import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "inline-flex items-center px-2 py-1 text-xs font-medium rounded-md border border-transparent shadow-sm bg-primary text-primary-foreground",
        secondary:
          "inline-flex items-center px-2 py-1 text-xs font-medium rounded-md border border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "inline-flex items-center px-2 py-1 text-xs font-medium rounded-md border border-transparent shadow-sm bg-red-800 text-destructive-foreground",
        outline:
          "inline-flex items-center px-2 py-2 text-xs font-medium rounded-md border border-grey-500 text-foreground",
        green:
          "inline-flex items-center px-2 py-1 text-xs font-medium rounded-md border border-transparent shadow-sm bg-green-700 text-green-foreground",
      }
  },
  defaultVariants: {
    variant: "default",
  },
                  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
