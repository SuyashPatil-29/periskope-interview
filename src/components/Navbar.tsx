import { Bell, HelpCircle, Users } from "lucide-react";
import { Card } from "./ui/card";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex fixed w-[calc(100vw-240px)] top-0 right-0 border-b border-b-gray-300 items-center justify-between mt-2 z-10 text-muted-foreground text-sm pb-2">
      <div className="flex text-muted-foreground gap-3 items-center ml-2">
        <Users className="h-4 w-4" />
        groups
      </div>
      <div className="flex gap-2 items-center justify-center mr-5">
        <Card className="flex p-1 px-2 text-muted-foreground items-center">
          <HelpCircle className="h-4 w-4" />
          Docs
        </Card>
        <Card className="flex p-1 px-2 text-muted-foreground items-center">
          <Image src="/green-dot.png" alt="whatsapp" width={20} height={20} />
          +91 7483543757
        </Card>
        <Card className="flex p-1 px-2 text-muted-foreground items-center">
          <Bell className="h-4 w-4"/>
        </Card>
      </div>
    </div>
  );
};

export default Navbar;
