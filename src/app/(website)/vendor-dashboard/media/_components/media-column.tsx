"use client";

import { DemoTableItemsType } from "@/data/demo";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const MediaColumns: ColumnDef<DemoTableItemsType>[] = [
  {
    header: "Image",
    cell: ({ row }) => {
      return (
        <Image
          src={row.original.image}
          height={50}
          width={74}
          alt="img"
          className="rounded-[8px]"
        />
      );
    },
  },
  {
    accessorKey: "Associate",
    header: "Associate",
  },
  {
    accessorKey: "Store",
    header: "Store",
  },
  {
    accessorKey: "Size",
    header: "Size",
  },
];
