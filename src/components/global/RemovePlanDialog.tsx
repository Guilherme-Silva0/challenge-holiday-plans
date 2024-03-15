"use client";

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

import { ReactNode, useState } from "react";
import { useApi } from "@/hooks/useApi";
import { useToast } from "../ui/use-toast";
import { Loader } from "./Loader";

type Props = {
  openButtonComponent: ReactNode;
  id: string;
};

export function RemovePlanDialog({ openButtonComponent, id }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { deletePlan } = useApi();
  const { toast } = useToast();

  const handleDelete = async () => {
    setIsLoading(true);

    const { error } = await deletePlan(id);

    if (error) {
      return toast({
        title: "Error",
        description: error,
        variant: "destructive",
      });
    }

    window.location.reload();

    setIsLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{openButtonComponent}</DialogTrigger>
      <DialogContent className="max-w-[400px] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="pb-4">Are you absolutely sure?</DialogTitle>
          <DialogDescription className="text-red-500">
            This action cannot be undone. This will permanently delete your
            holiday plan and remove from servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? <Loader size="small" color="white" /> : "Confirm"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
