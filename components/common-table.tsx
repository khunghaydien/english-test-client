"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { isEmpty } from "lodash";
import { FaBoxOpen } from "react-icons/fa";
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
  loading?: boolean;
}

export interface TablePaginationProps {
  totalElements: number;
  pageSize: number;
  pageNum: number;
  onPageChange: (newPage: number) => void;
  onPageSizeChange: (newPageSize: number) => void;
}

const CommonTableLoading = () => {
  return (
    <div className="w-full p-1">
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} className="w-full h-[40px] mb-1"></Skeleton>
      ))}
    </div>
  );
};

const CommonTableNoData = () => {
  return (
    <div className="w-full h-[400px] flex items-center justify-center flex-col">
      <FaBoxOpen className="w-10 h-10" />
      No data available in table
    </div>
  );
};

export function CommonTable({
  rows,
  columns,
  pagination,
  tableCaption,
  loading,
}: ICommonTable) {
  const columnRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tableRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  console.log(rows);
  
  const [columnWidths, setColumnWidths] = useState<number[]>(
    columns.map(({ width }) => (width ? width : 250))
  );
  const [totalWidth, setTotalWidth] = useState<number>(
    columnWidths.reduce((acc, value) => acc + value, 0)
  );
  const [tableWidth, setTableWidth] = useState<number>(0);

  useEffect(() => {
    if (tableRef.current) setTableWidth(tableRef.current.offsetWidth);
    setMounted(true);
  }, [tableRef]);

  const onMouseDown = (e: React.MouseEvent, index: number) => {
    const startX = e.clientX;
    const startWidth = columnRefs.current[index]?.offsetWidth || 0;
    const handleMouseMove = (e: MouseEvent) => {
      const delta = e.clientX - startX;
      const newWidth = startWidth + delta;

      if (newWidth > (columns[index].width || 250)) {
        const newColumnWidths = columnWidths.map((val, i) =>
          i === index ? newWidth : val
        );
        const totalWidth = newColumnWidths.reduce(
          (acc, value) => acc + value,
          0
        );
        setColumnWidths(newColumnWidths);
        setTotalWidth(totalWidth);
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="w-full relative" ref={tableRef}>
      {(loading || !mounted) && <CommonTableLoading />}
      {!loading && mounted && (
        <div
          className="overflow-x-auto w-full"
          style={{ maxWidth: `${tableWidth ? tableWidth + "px" : "100%"}` }}
        >
          <div className="w-full" style={{ width: `${totalWidth}px` }}>
            <div className="flex">
              {columns.map((column, index) => (
                <div
                  key={index}
                  className="relative p-2 border border-gray-200 text-center"
                  style={{ width: `${columnWidths[index]}px` }}
                  ref={(el) => {
                    columnRefs.current[index] = el;
                  }}
                >
                  {column.label}
                  <div
                    onMouseDown={(e) => onMouseDown(e, index)}
                    className="absolute right-0 top-0 h-full w-2 cursor-col-resize"
                    style={{ cursor: "col-resize" }}
                  />
                </div>
              ))}
            </div>
            <div>
              {isEmpty(rows) && <CommonTableNoData />}
              {!isEmpty(rows) &&
                rows.map((row: any, rowIndex: number) => (
                  <div key={rowIndex} className="flex">
                    {columns.map((column, colIndex) => (
                      <div
                        key={colIndex}
                        className="p-2 border-l border-b border-r border-gray-200 text-left"
                        style={{ width: `${columnWidths[colIndex]}px` }}
                      >
                        {row[column.id]}
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
      <Pagination className="w-full absolute right-0">
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
    </div>
  );
}
