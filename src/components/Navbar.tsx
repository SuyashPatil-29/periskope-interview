import { Bell, Circle, HelpCircle, Users } from "lucide-react";
import { MobileSideBar } from "./MobileSideBar";
import { Card } from "./ui/card";

const Navbar = () => {
  return (
    <div className="flex fixed xl:w-[calc(100vw-240px)] w-screen top-0 right-0 border-b bg-white border-b-gray-300 items-center justify-between pt-2 z-10 text-muted-foreground text-sm pb-2">
      <div className="flex gap-2">
        <div className="xl:hidden block"><MobileSideBar /></div>
        <div className="flex text-muted-foreground gap-3 items-center ml-2">
          <Users className="h-4 w-4" />
          groups
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center mr-5">
        <Card className="flex p-1 px-2 text-muted-foreground items-center">
          <HelpCircle className="h-4 w-4" />
          Docs
        </Card>
        <Card className="flex p-1 gap-2 px-2 text-muted-foreground items-center">
          <Circle className="h-4 w-4 text-green-300" fill="green" />
          +91 7483543757
        </Card>
        <Card className="flex p-1 px-2 text-muted-foreground items-center">
          <Bell className="h-4 w-4" />
        </Card>
      </div>
    </div>
  );
};

export default Navbar;
