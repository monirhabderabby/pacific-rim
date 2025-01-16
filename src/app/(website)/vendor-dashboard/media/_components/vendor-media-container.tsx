"use client";

import { demoTableItems, DemoTableItemsType } from "@/data/demo";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { MediaColumns } from "./media-column";

const VendorMediaContainer = () => {
  return (
    <div>
      <TableContainer data={demoTableItems} columns={MediaColumns} />
    </div>
  );
};

export default VendorMediaContainer;

import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";

const TableContainer = ({
  data,
  columns,
}: {
  data: any[];
  columns: ColumnDef<DemoTableItemsType>[];
}) => {
  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <DataTable table={table} columns={columns} />
    </>
  );
};
