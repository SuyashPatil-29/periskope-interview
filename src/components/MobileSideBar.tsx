import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import {
  BellRing,
  ChevronsUpDown,
  Contact,
  FolderClosed,
  Home,
  Menu,
  MessageCircleMore,
  Settings,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";

export function MobileSideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><Menu className="h-6 w-6" /></Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full">
        <div className="fixed xl:hidden block h-screen top-0 w-[380px] left-0 pt-4 border-r border-gray-300 text-sm">
          <div className="flex items-center justify-start pl-6 gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-bold">Periskope</h3>
              <p className="text-muted-foreground text-[13px]">
                bharat@hashlabs.dev
              </p>
            </div>
            <ChevronsUpDown className="text-muted-foreground" />
          </div>

          <Separator className="mt-3" />

          <div className="flex flex-col items-center justify-start h-[800px] ">
            <div className="flex items-center justify-start gap-4 w-full py-2 pl-7 hover:bg-gray-200 group rounded-md">
              <Home className="text-muted-foreground group-hover:text-green-700" />
              <p className="ml-2 text-muted-foreground group-hover:text-green-700 font-semibold">
                Dashboard
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 w-full py-2 pl-7 hover:bg-gray-200 group rounded-md">
              <MessageCircleMore className="text-muted-foreground group-hover:text-green-700" />
              <p className="ml-2 text-muted-foreground group-hover:text-green-700 font-semibold">
                Chat
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 w-full py-2 pl-7 bg-gray-200 rounded-md">
              <Users className="text-green-700" />
              <p className="ml-2 text-green-700 font-semibold">Groups</p>
            </div>
            <div className="flex items-center justify-start gap-4 w-full py-2 pl-7 hover:bg-gray-200 group rounded-md">
              <Contact className="text-muted-foreground group-hover:text-green-700" />
              <p className="ml-2 text-muted-foreground group-hover:text-green-700 font-semibold">
                Contacts
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 w-full py-2 pl-7 hover:bg-gray-200 group rounded-md">
              <BellRing className="text-muted-foreground group-hover:text-green-700" />
              <p className="ml-2 text-muted-foreground group-hover:text-green-700 font-semibold">
                Logs
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 w-full py-2 pl-7 hover:bg-gray-200 group rounded-md">
              <FolderClosed className="text-muted-foreground group-hover:text-green-700" />
              <p className="ml-2 text-muted-foreground group-hover:text-green-700 font-semibold">
                Files
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 w-full py-2 pl-7 hover:bg-gray-200 group rounded-md">
              <Settings className="text-muted-foreground group-hover:text-green-700" />
              <p className="ml-2 text-muted-foreground group-hover:text-green-700 font-semibold">
                Settings
              </p>
            </div>
          </div>

          <div className="absolute bottom-3 left-5 flex gap-4 items-center justify-center">
            <Image
              src="/whatsapp-svg.svg"
              alt="whatsapp"
              width={30}
              height={30}
            />
            <p className=" font-semibold text-muted-foreground">
              Help and Support
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
