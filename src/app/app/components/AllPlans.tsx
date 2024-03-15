"use client";

import { Button } from "@/components/ui/button";
import { Plan } from "./Plan";
import { CirclePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { FullPlan } from "@/types/FullPlan";
import { useApi } from "@/hooks/useApi";
import { useToast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { CreatePlanDialog } from "@/components/global/CreatePlanDialog";

export function AllPlans() {
  const [plans, setPlans] = useState<FullPlan[] | null>();
  const [isLoading, setIsLoading] = useState(true);
  const { getAllPlans } = useApi();
  const { toast } = useToast();

  useEffect(() => {
    const fetchPlans = async () => {
      setIsLoading(true);
      const { data, error } = await getAllPlans();

      if (error) {
        return toast({
          variant: "destructive",
          title: "Error",
          description: error,
        });
      }

      setPlans(data);
      setIsLoading(false);
    };

    if (!plans) {
      fetchPlans();
    }
  }, [plans, getAllPlans, toast]);

  return (
    <div className="grid gap-4 md:gap-6">
      <div>
        <CreatePlanDialog
          openButtonComponent={
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-1"
            >
              <CirclePlus />
              <span>New Plan</span>
            </Button>
          }
        />
      </div>
      {isLoading &&
        Array.from(Array(4).keys()).map((index) => (
          <div
            key={index}
            className="grid items-center gap-4 md:grid-cols-[1fr_2fr_1fr]"
          >
            <div className="grid items-center gap-1">
              <Skeleton className="h-[30px] w-[150px]" />
              <Skeleton className="h-[20px] w-[250px]" />
            </div>
            <div className="flex items-center justify-end space-x-2 text-sm md:space-x-4">
              <Skeleton className="h-[30px] w-[85px]" />
              <Skeleton className="h-[30px] w-[85px]" />
            </div>
          </div>
        ))}
      {!isLoading &&
        plans &&
        plans.map((plan) => <Plan key={plan.id} data={plan} />)}{" "}
    </div>
  );
}
