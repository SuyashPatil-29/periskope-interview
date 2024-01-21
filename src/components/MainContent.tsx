"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Group } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Circle, ListFilter, UsersIcon } from "lucide-react";
import { ComboBox } from "./ComboBox";
import { EmptyAlert } from "./EmptyAlery";
import { ErrorAlert } from "./ErrorAlert";
import { LoadingState } from "./LoadingCard";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { project } from "@prisma/client";
import { cn } from "@/lib/utils";
import { getCircleFill } from "@/lib/getCircleFill";
import { useState } from "react";

type Props = {};

const MainContent = (props: Props) => {
  const {
    data: groups,
    isFetching,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["groups"],
    queryFn: async () => {
      const res = await axios.get("/api/get-groups");
      return res.data as Group[] | undefined;
    },
    staleTime: 3000
  });

  console.log(groups);

  return (
    <div className="xl:ml-[240px] mr-[350px] mt-[46px] border-r border-r-gray-300 min-h-[94vh] pb-10">
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

      {isLoading || isFetching ? (
        <LoadingState />
      ) : isError ? (
        <ErrorAlert />
      ) : groups && groups.length > 0 ? (
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
            {groups.map((group) => (
              <TableRow key={group.id} className="hover:bg-gray-200">
                <TableCell>
                  <Checkbox id={group.id.toLocaleString()} />
                </TableCell>
                <TableCell className="flex gap-2 items-center justify-start">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={group.imageSrc!} alt="Group-Icon" />
                    <AvatarFallback className="bg-gray-400">
                      <UsersIcon className="text-white h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <p className="font-semibold text-xs text-muted-foreground">{group.name}</p>
                  <p className="text-[10px] text-white rounded-full bg-green-400 px-1.5">
                    {group.messages}
                  </p>
                </TableCell>
                <TableCell>
                  <Badge
                    className={cn(
                      "bg-white hover:bg-white text-xs whitespace-nowrap",
                      group.project === project.demo
                        ? "text-blue-400 border-current"
                        : "text-orange-400 border-current"
                    )}
                  >
                    # {group.project}
                  </Badge>
                </TableCell>
                <TableCell className="flex gap-1 items-center justify-start mb-[5px] whitespace-nowrap">
                  {group.labels.slice(0, 2).map((label, i) => (
                    <Badge
                      key={i}
                      className={cn(
                        "bg-white hover:bg-white flex gap-0 text-xs whitespace-nowrap p-1",
                        {
                          "text-neutral-800 border-current":
                            label === "High Value".replace(" ", "") || "High Value",
                          "text-green-400 border-current": label === "Priority",
                          "text-red-400 border-current": label === "Warm",
                          "text-purple-500 border-current" : label === "Pilot"
                        }
                      )}
                    >
                      <p>
                        <Circle
                          className="h-3 w-3"
                          fill={getCircleFill(label)}
                        />
                      </p>
                      {label.length > 5 ? `${label.substring(0, 5)}...` : label}
                    </Badge>
                  ))}
                  {group.labels.length > 2 && (
                    <Badge className="bg-white hover:bg-white text-xs text-red-400 border-current ">
                      + {group.labels.length - 2}
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="w-[100px] text-center py-[-8px]">{group.members}</TableCell>
                <TableCell className="text-muted-foreground font-semibold text-sm text-center py-[-8px]">{group.lastActive}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <EmptyAlert />
      )}
    </div>
  );
};

export default MainContent;
