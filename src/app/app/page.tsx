import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EditPlanDialog } from "@/components/global/EditPlanDialog";
import { RemovePlanDialog } from "@/components/global/RemovePlanDialog";
import { auth } from "@/services/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="py-6">
      <div className="container space-y-6 px-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Holiday Plans</h1>
          <p className="max-w-[600px] text-gray-500 md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed dark:text-gray-400">
            Create, edit, and delete your holiday plans.
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="grid gap-2 md:grid-cols-3">
              <div className="space-y-2">
                <Label className="text-base" htmlFor="destination">
                  Destination
                </Label>
                <Input
                  id="destination"
                  placeholder="Enter the destination"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-base" htmlFor="start-date">
                  Start Date
                </Label>
                <Input id="start-date" required type="date" />
              </div>
              <div className="space-y-2">
                <Label className="text-base" htmlFor="end-date">
                  End Date
                </Label>
                <Input id="end-date" required type="date" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-base" htmlFor="description">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Enter the description"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="h-10 w-full md:w-auto" type="submit">
              Create Plan
            </Button>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800" />
        <div className="space-y-4">
          <div className="grid items-center grid-cols-2">
            <Link href="/details/000" className="space-y-1">
              <h3 className="text-lg font-bold">Paris</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                June 1, 2023 - June 15, 2023
              </p>
            </Link>
            <div className="flex items-center justify-end space-x-2">
              <EditPlanDialog
                openButtonComponent={<Button size="sm">Edit</Button>}
              />
              <RemovePlanDialog
                openButtonComponent={
                  <Button size="sm" variant="destructive">
                    Delete
                  </Button>
                }
              />
            </div>
          </div>

          <div className="grid items-center grid-cols-2">
            <Link href="/details/001" className="space-y-1">
              <h3 className="text-lg font-bold">Maldives</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                August 10, 2023 - August 20, 2023
              </p>
            </Link>
            <div className="flex items-center justify-end space-x-2">
              <EditPlanDialog
                openButtonComponent={<Button size="sm">Edit</Button>}
              />
              <RemovePlanDialog
                openButtonComponent={
                  <Button size="sm" variant="destructive">
                    Delete
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
