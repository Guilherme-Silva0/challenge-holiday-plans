import { EditPlanDialog } from "@/components/global/EditPlanDialog";
import { RemovePlanDialog } from "@/components/global/RemovePlanDialog";
import { Button } from "@/components/ui/button";
import { formatUtcDate } from "@/lib/formatUtcDate";
import { FullPlan } from "@/types/FullPlan";
import { Edit, Trash } from "lucide-react";
import Link from "next/link";

type Props = {
  data: FullPlan;
};

export function Plan({ data }: Props) {
  return (
    <div className="grid items-center gap-4 md:grid-cols-[1fr_2fr_1fr]">
      <Link
        href={`/app/details/${data.id}`}
        className="grid items-center gap-1"
      >
        <h2 className="text-xl font-semibold tracking-tight">{data.title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {formatUtcDate(data.startDate)} - {formatUtcDate(data.endDate)}
        </p>
      </Link>
      <div className="flex items-center justify-end space-x-2 text-sm md:space-x-4">
        <EditPlanDialog
          data={data}
          id={data.id}
          openButtonComponent={
            <Button size="sm" variant="outline" className="flex gap-2">
              <Edit size={18} />
              <span className="sr-only sm:not-sr-only">Edit</span>
            </Button>
          }
        />
        <RemovePlanDialog
          id={data.id}
          openButtonComponent={
            <Button size="sm" variant="destructive" className="flex gap-2">
              <Trash size={18} />
              <span className="sr-only sm:not-sr-only">Delete</span>
            </Button>
          }
        />
      </div>
    </div>
  );
}
