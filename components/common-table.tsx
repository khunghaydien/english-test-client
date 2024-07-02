"use client";
import { ReactNode } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

export interface TableHeaderColumn {
  id: string;
  label: string;
  align?: "left" | "center" | "right";
  sortBy?: string;
  orderBy?: "asc" | "desc";
  tooltip?: string | ReactNode;
  width?: number;
}
export interface ICommonTable {
  rows: any;
  columns: TableHeaderColumn[];
  pagination?: TablePaginationProps;
  tableCaption?: string;
}

export interface TablePaginationProps {
  totalElements: number;
  pageSize: number;
  pageNum: number;
  onPageChange: (newPage: number) => void;
  onPageSizeChange: (newPageSize: number) => void;
}

export function CommonTable({
  rows,
  columns,
  pagination,
  tableCaption,
}: ICommonTable) {
  const onRowClick = (row: any, columnId: string) => {
    console.log(row, columnId);
  };
  const gridTemplateColumns = columns
    .map(({ width }) => (width ? `${width}px` : "1fr"))
    .join(" ");
  return (
    <>
      <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <div className="p-4 bg-gray-100 text-center font-semibold">
          {tableCaption}
        </div>
        <div className="grid" style={{ gridTemplateColumns }}>
          {columns.map((column, index) => (
            <div
              key={index}
              className="p-2 border-b border-r border-gray-200 text-center"
            >
              {column.label}
            </div>
          ))}
        </div>
        <div>
          {rows.map((row: any, rowIndex: number) => (
            <div
              key={rowIndex}
              className="grid"
              style={{ gridTemplateColumns }}
            >
              {columns.map((column, colIndex) => (
                <div
                  key={colIndex}
                  onClick={() => onRowClick(row, column.id)}
                  className="p-2 border-b border-r border-gray-200 text-left"
                >
                  {row[column.id]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Pagination className="w-full flex justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
