import React from "react";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { ListFilter } from "lucide-react";
import { Button } from "./ui/button";
import { ComboBox } from "./ComboBox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";

type Props = {};

const MainContent = (props: Props) => {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      lastActive: "3:17",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      lastActive: "yesterday",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      lastActive: "yesterday",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      lastActive: "yesterday",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      lastActive: "yesterday",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      lastActive: "yesterday",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      lastActive: "yesterday",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      lastActive: "yesterday",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      lastActive: "yesterday",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      lastActive: "yesterday",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      lastActive: "yesterday",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      lastActive: "yesterday",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      lastActive: "yesterday",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      lastActive: "yesterday",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      lastActive: "yesterday",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      lastActive: "yesterday",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      lastActive: "yesterday",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      lastActive: "yesterday",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      lastActive: "yesterday",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      lastActive: "yesterday",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      lastActive: "yesterday",
      paymentMethod: "Credit Card",
    },
  ];
  return (
    <div className="ml-[240px] mr-[375px] mt-[46px] border-r border-r-gray-300">
      <div className="flex items-center justify-between text-muted-foreground p-[13px]">
        <div className="flex gap-3">
          <Input className="w-[200px]" placeholder="Search" />
          <Card className="flex gap-2 px-3 items-center justify-center text-muted-foreground">
            <ListFilter className="h-4 w-4" />
            <p className="text-sm">Filter</p>
          </Card>
        </div>
        <div className="flex gap-1">
          <Button className="bg-[rgb(21,128,61)] text-white hover:bg-[rgb(21,128,61)]/80 text-sm">
            Bulk Message
          </Button>
          <ComboBox />
        </div>
      </div>

      <Separator />

      <Table className="border-t-1 border-gray-300">
        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox id="all" />
            </TableHead>
            <TableHead className="w-[300px]">Group name</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Labels</TableHead>
            <TableHead className="">Members</TableHead>
            <TableHead className="">Last Active</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell>
                <Checkbox id={invoice.invoice} />
              </TableCell>
              <TableCell>{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
              <TableCell>{invoice.lastActive}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MainContent;
