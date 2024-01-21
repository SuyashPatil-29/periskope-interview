import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export function EmptyAlert() {
  return (
    <Alert className="h-[90vh]">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Oops</AlertTitle>
      <AlertDescription>
        There is nothing here! Join new groups or login with another account.
      </AlertDescription>
    </Alert>
  );
}