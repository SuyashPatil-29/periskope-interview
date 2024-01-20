import React from "react";
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
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { RefreshCcw } from "lucide-react";

type Props = {};

const SidePanel = (props: Props) => {
  return (
    <div className="fixed right-0 top-0 w-[375px] h-full mt-10">

      <div className="flex items-center justify-between px-6">
        <div className="flex items-center justify-center gap-3 py-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p className=" font-semibold">
            Evoke {'<>'} Scope
          </p>
        </div>
        <div className="flex gap-2">
        <RefreshCcw className="h-3 w-3"/>
        <p className="text-muted-foreground text-xs">Refresh</p>
        </div>
      </div>

      <Separator />

      <Tabs defaultValue="account" className="w-[400px] py-4">
        <TabsList className="grid w-[300px] grid-cols-3 gap-2">
          <TabsTrigger className="shadow-xl" value="account">Overview</TabsTrigger>
          <TabsTrigger className="shadow-xl" value="password">Members</TabsTrigger>
          <TabsTrigger className="shadow-xl" value="logs">Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="flex items-center justify-between px-6 w-[330px]">
            <p className="text-muted-foreground font-semibold text-sm">Last Active</p>
            <p className="text-gray-700 font-semibold text-sm">3 : 17</p>
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
      </Tabs>
    </div>
  );
};

export default SidePanel;
