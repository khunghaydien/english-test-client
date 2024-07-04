"use client";
import { CommonTable, TableHeaderColumn } from "@/components/common-table";
import React, { useEffect, useRef, useState } from "react";

export const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
export const invoicesColumns: TableHeaderColumn[] = [
  {
    id: "invoice",
    align: "left",
    label: "Invoice",
    width: 100,
  },
  {
    id: "paymentStatus",
    align: "left",
    label: "Payment Status",
  },
  {
    id: "totalAmount",
    align: "left",
    label: "Total Amount",
  },
  {
    id: "paymentMethod",
    align: "left",
    label: "Payment Method",
    width: 500,
  },
];
function page() {
  return (
    <div className="w-full">
      <CommonTable rows={invoices} columns={invoicesColumns} />
    </div>
  );
}

export default page;
