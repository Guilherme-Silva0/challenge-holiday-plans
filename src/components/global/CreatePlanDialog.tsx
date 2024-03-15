"use client";

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
import { ReactNode, useState } from "react";
import { FullPlan } from "@/types/FullPlan";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formPlanSchema, TypeFormPlan } from "@/lib/formPlanSchema";
import { useToast } from "../ui/use-toast";
import { useApi } from "@/hooks/useApi";
import { Loader } from "./Loader";

type Props = {
  openButtonComponent: ReactNode;
};

export function CreatePlanDialog({ openButtonComponent }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { createPlan } = useApi();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeFormPlan>({
    resolver: zodResolver(formPlanSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);

    const { error } = await createPlan(data);

    if (error) {
      setIsLoading(false);
      if (error === "Required") {
        toast({
          title: "Error",
          description: "Please fill all required fields",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Error",
        description: error,
        variant: "destructive",
      });
      return;
    }

    window.location.reload();

    setIsLoading(false);
  });

  return (
    <Dialog modal>
      <DialogTrigger asChild>{openButtonComponent}</DialogTrigger>
      <DialogContent className="w-11/12 rounded-2xl sm:max-w-3xl">
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Create Holiday Plan</DialogTitle>
          </DialogHeader>
          <CardContent className="p-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter title"
                  {...register("title")}
                  disabled={isLoading}
                />
                {errors.title?.message && (
                  <p className="text-destructive text-sm">
                    {errors.title?.message as string}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input
                    id="start-date"
                    placeholder="Enter start date"
                    type="date"
                    {...register("startDate")}
                    disabled={isLoading}
                  />
                  {errors.startDate?.message && (
                    <p className="text-destructive text-sm">
                      {errors.startDate?.message as string}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="end-date">End Date</Label>
                  <Input
                    id="end-date"
                    placeholder="Enter end date"
                    type="date"
                    {...register("endDate")}
                    disabled={isLoading}
                  />
                  {errors.endDate?.message && (
                    <p className="text-destructive text-sm">
                      {errors.endDate?.message as string}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="description"
                  placeholder="Enter description"
                  {...register("description")}
                  disabled={isLoading}
                />
                {errors.description?.message && (
                  <p className="text-destructive text-sm">
                    {errors.description?.message as string}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
          <DialogFooter>
            <Button disabled={isLoading} type="submit">
              {isLoading ? (
                <Loader size="small" color="white" />
              ) : (
                "Create Plan"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
