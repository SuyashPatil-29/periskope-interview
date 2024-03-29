"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, ChevronsUpDown, Circle, FolderOutput, LogOut, RefreshCcw, Signal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

type Props = {};

const SidePanel = (props: Props) => {
  return (
    <div className="fixed right-0 top-0 w-[350px] h-full mt-10">
      <div className="flex items-center justify-between px-6">
        <div className="flex items-center justify-center gap-3 py-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p className=" font-semibold">Evoke {"<>"} Scope</p>
        </div>
        <div className="flex gap-2 cursor-pointer" onClick={() => window.location.reload()}>
          <RefreshCcw className="h-3 w-3 text-muted-foreground" />
          <p className="text-muted-foreground font-semibold text-xs">Refresh</p>
        </div>
      </div>

      <Separator />

      <Tabs defaultValue="account" className="w-[400px] py-4">
        <TabsList className="grid w-[300px] grid-cols-3 gap-2 pl-4">
          <TabsTrigger value="account">Overview</TabsTrigger>
          <TabsTrigger value="password">Members</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="flex items-center justify-between px-6 py-1.5 w-[330px]">
            <p className="text-gray-400 font-semibold text-sm">Last Active</p>
            <p className="text-muted-foreground font-semibold text-sm">
              3 : 17
            </p>
          </div>
          <div className="flex items-center justify-between px-6 py-1.5 w-[330px]">
            <p className="text-gray-400 font-semibold text-sm flex gap-1">
              Dissappearing Messages
            </p>
            <Card className="text-muted-foreground font-semibold text-xs flex gap-1 p-1 items-center justify-center">
              Off
              <ChevronsUpDown className="h-4 w-4"/>
            </Card>
          </div>
          <div className="flex items-center justify-between px-6 py-1.5 w-[330px]">
            <p className="text-gray-400 font-semibold text-sm">
              Send Message Permission
            </p>
            <Card className="text-muted-foreground font-semibold text-xs p-1 items-center justify-center flex">
              All
              <ChevronsUpDown className="h-4 w-4"/>
            </Card>
          </div>
          <div className="flex items-center justify-between px-6 py-1.5 w-[330px]">
            <p className="text-gray-400 font-semibold text-sm">Project</p>
            <Badge className=" hover:bg-white text-blue-400 bg-white border-current text-right">
              #Demo
            </Badge>
          </div>
          <div className="flex items-start justify-between px-6 py-1.5 w-[330px]">
            <p className="text-gray-400 font-semibold text-sm">Labels</p>
            <div className="flex flex-col gap-2 text-right">
              <Badge className=" hover:bg-white text-gray-700 bg-white border-current text-right flex items-center justify-start gap-1">
                <Circle className="h-3 w-3" fill="black"/>
                High V...
              </Badge>
              <Badge className=" hover:bg-white text-green-500 bg-white border-current text-right flex items-center justify-start gap-1">
                <Circle className="h-3 w-3" fill="green"/>
                Priority
              </Badge>
              <Badge className=" hover:bg-white text-red-400 bg-white border-current text-right flex items-center justify-start gap-1">
                <Circle className="h-3 w-3" fill="red"/>
                Warm
              </Badge>
              <Badge className=" hover:bg-white text-muted-foreground bg-white border-current text-right">
                + Add New
              </Badge>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, youll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="logs">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you{`'`}re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      </Tabs>

      <div className="pl-4">
        <div className="flex gap-3 items-center justify-start font-semibold text-muted-foreground mt-1 text-sm">
          <FolderOutput className="h-3 w-3 text-muted-foreground font-medium" />
          Export Chat
        </div>
        <div className="flex gap-3 items-center justify-start font-semibold text-red-500 mt-1 text-sm">
          <LogOut className="h-3 w-3 text-red-500 font-medium" />
          Exit Group
        </div>
      </div>

      <div className="mt-6 px-3">
        <div className="flex gap-3 items-center justify-between">
          <p className=" font-semibold text-muted-foreground text-sm">
            {" "}
            PER 0-11 | Evoke {"<>"} Scope
          </p>
          <Avatar className="h-6 w-6">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex gap-3 items-center justify-start">
          <Circle className="h-3 w-3 text-red-500" />
          <p className=" font-semibold text-gray-700 text-sm">
            Issues with mentions on group
          </p>
        </div>

        <div className="flex gap-2 mt-2 ml-5">
          <Card className="p-2">
            <Signal className="h-3 w-3" />
          </Card>
          <Card className="flex gap-1 items-center justify-center p-2">
          <CalendarDays className="text-rose-400 h-3 w-3"/>
          <p className="text-xs">Dec 22</p>
          </Card>
          <Card className="flex gap-1 items-center justify-center p-2">
          <Circle className="h-3 w-3" fill="black"/>
            <p className="text-xs">Client</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
