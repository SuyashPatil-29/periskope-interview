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
import { ListFilter, UsersIcon } from "lucide-react";
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
  });

  console.log(groups);

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
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={group.imageSrc!} alt="Group-Icon" />
                    <AvatarFallback className="bg-gray-600">
                      <UsersIcon className="text-white h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <p className="font-medium text-sm">{group.name}</p>
                  <p className="text-xs text-white rounded-full bg-green-400 p-1">{group.messages}</p>
                </TableCell>
                <TableCell>
                  <Badge
                    className={cn(
                      "bg-white hover:bg-white",
                      group.project === project.demo
                        ? "text-blue-400 border-current"
                        : "text-orange-400 border-current"
                    )}
                  >
                    # {group.project}
                  </Badge>
                </TableCell>
                <TableCell className="flex gap-1">
                  {group.labels.map((label, i) => (
                    <Badge key={i} className="">{label}</Badge>
                  ))}
                </TableCell>
                <TableCell>{group.members}</TableCell>
                <TableCell>{group.lastActive}</TableCell>
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
