"use client";

import { EditPlanDialog } from "@/components/global/EditPlanDialog";
import { Loader } from "@/components/global/Loader";
import { RemovePlanDialog } from "@/components/global/RemovePlanDialog";
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useApi } from "@/hooks/useApi";
import { formatUtcDate } from "@/lib/formatUtcDate";
import { FullPlan } from "@/types/FullPlan";
import { ChevronLeft, Edit, Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Details({ params }: { params: { id: string } }) {
  const [plan, setPlan] = useState<FullPlan | null>();
  const [isLoading, setIsLoading] = useState(true);
  const { getPlanById } = useApi();
  const { toast } = useToast();
  const { push } = useRouter();

  useEffect(() => {
    const fetchPlan = async () => {
      setIsLoading(true);
      const { data, error } = await getPlanById(params.id);

      if (error) {
        setIsLoading(false);
        return push("/app");
      }

      setPlan(data);
      setIsLoading(false);
    };

    if (!plan) {
      fetchPlan();
    }
  }, [plan, getPlanById, toast, params.id, push]);

  return (
    <div className="flex items-center justify-center w-full px-2 min-h-screen">
      {isLoading && <Loader size="large" />}
      {!isLoading && plan && (
        <Card className="w-full lg:max-w-fit lg:m-auto -mt-12">
          <CardHeader className="flex items-start px-6 pb-2 pt-6">
            <h2 className="text-lg font-bold tracking-tighter">{plan.title}</h2>
          </CardHeader>
          <CardContent className="flex flex-col space-y-4">
            <div className="grid gap-3">
              <div className="space-y-1">
                <p className="leading-none text-gray-600 font-semibold">
                  Description
                </p>
                <p className="text-sm leading-none">{plan.description}</p>
              </div>
              <div className="space-y-1">
                <p className="leading-none text-gray-600 font-semibold">
                  Start Date
                </p>
                <p className="text-sm leading-none">
                  {formatUtcDate(plan.startDate)}
                </p>
              </div>
              <div className="space-y-1">
                <p className="leading-none text-gray-600 font-semibold">
                  End Date
                </p>
                <p className="text-sm leading-none">
                  {formatUtcDate(plan.endDate)}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Button asChild variant="outline" size="sm">
                <Link href="/app" className="flex items-center space-x-2">
                  <ChevronLeft size={24} className="" /> Back to Plans
                </Link>
              </Button>
              <div className="ml-auto flex items-center space-x-2">
                <EditPlanDialog
                  id={plan.id}
                  data={plan}
                  openButtonComponent={
                    <Button
                      className="rounded-full border-gray-200 border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:border-gray-800 dark:hover:border-gray-700"
                      size="sm"
                      variant="outline"
                    >
                      <Edit size={18} />
                      <span className="sr-only">Edit</span>
                    </Button>
                  }
                />
                <RemovePlanDialog
                  id={plan.id}
                  openButtonComponent={
                    <Button
                      className="rounded-full border-gray-200 border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:border-gray-800 dark:hover:border-gray-700"
                      size="sm"
                      variant="destructive"
                    >
                      <Trash size={18} />
                      <span className="sr-only">Delete</span>
                    </Button>
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
