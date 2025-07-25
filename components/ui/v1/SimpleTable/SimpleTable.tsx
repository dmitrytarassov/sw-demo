"use client";

import {
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import React from "react";

import { SimpleTableProps } from "@/components/ui/interfaces/SimpleTableProps";

const SimpleTable: React.FC<SimpleTableProps> = ({ columns, rows }) => {
  return (
    <Table>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(row) => {
          console.log(row);
          return (
            <TableRow key={row.key}>
              {(columnKey) => {
                return (
                  <TableCell is={"id"}>{getKeyValue(row, columnKey)}</TableCell>
                );
              }}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
};

export default SimpleTable;
