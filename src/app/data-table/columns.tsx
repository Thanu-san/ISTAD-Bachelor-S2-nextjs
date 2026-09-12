"use client"

import Image from "next/image"
import { createColumnHelper } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableFeatures } from "./data-table-features"

type RatingType = {
  rate: number
}

export type ProductType = {
  id?: number
  image?: string
  title?: string
  price?: number
  category?: string
  rating?: RatingType
}

const columnHelper = createColumnHelper<DataTableFeatures,ProductType>()

export const columns = [

  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        indeterminate={
          table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  }),

  columnHelper.accessor("id", {
    header: "ID",
  }),

  columnHelper.accessor("image", {
    header: "Picture",
    cell: ({ row }) => (
      <Image
        width={30}
        height={30}
        src={row.getValue<string>("image") ?? "/placeholder.png"}
        alt="picture"
      />
    ),
  }),

  columnHelper.accessor("title", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === "asc")
          }
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  }),

  columnHelper.accessor("price", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === "asc")
          }
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = row.getValue<number>("price") ?? 0

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return (
        <div className="font-medium text-red-500">
          {formatted}
        </div>
      )
    },
  }),

  columnHelper.accessor("category", {
    header: "Category",
  }),

  columnHelper.accessor("rating.rate", {
    header: "Rating",
  }),
]