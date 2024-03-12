import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { ReactNode } from "react";

type Props = {
  openButtonComponent: ReactNode;
};

export function RemovePlanDialog({ openButtonComponent }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>{openButtonComponent}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="pb-4">Are you absolutely sure?</DialogTitle>
          <DialogDescription className="text-red-500">
            This action cannot be undone. This will permanently delete your
            holiday plan and remove from servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="destructive">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
