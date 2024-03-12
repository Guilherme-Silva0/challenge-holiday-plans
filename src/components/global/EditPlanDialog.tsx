import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

type Props = {
  openButtonComponent: ReactNode;
};

export function EditPlanDialog({ openButtonComponent }: Props) {
  return (
    <Dialog modal>
      <DialogTrigger asChild>{openButtonComponent}</DialogTrigger>
      <DialogContent className="w-11/12 sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Edit Holiday Plan</DialogTitle>
        </DialogHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="destination">Destination</Label>
              <Input id="destination" placeholder="Enter destination" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="start-date">Start Date</Label>
                <Input
                  id="start-date"
                  placeholder="Enter start date"
                  type="date"
                />
              </div>
              <div>
                <Label htmlFor="end-date">End Date</Label>
                <Input id="end-date" placeholder="Enter end date" type="date" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                className="min-h-[100px]"
                id="description"
                placeholder="Enter description"
              />
            </div>
          </div>
        </CardContent>
        <DialogFooter>
          <Button type="submit">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
