import { ReactNode } from "react";

export type SimpleTableProps = {
  columns: {
    key: string;
    label: string;
  }[];
  rows: {
    [value: string]: ReactNode;
    key: string | number;
  }[];
};
