import { EditPlanDialog } from "@/components/global/EditPlanDialog";
import { RemovePlanDialog } from "@/components/global/RemovePlanDialog";
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { SVGProps } from "react";

export default function Details() {
  return (
    <Card className="w-full lg:max-w-fit lg:m-auto lg:mt-2">
      <CardHeader className="flex items-start px-6 pb-2 pt-6">
        <h2 className="text-lg font-bold tracking-tighter">
          Family Trip to the Beach
        </h2>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        <div className="grid gap-3">
          <div className="space-y-1">
            <p className="leading-none text-gray-600 font-semibold">
              Description
            </p>
            <p className="text-sm leading-none">
              We&apos;re going to have a great time building sandcastles and
              playing beach volleyball.
            </p>
          </div>
          <div className="space-y-1">
            <p className="leading-none text-gray-600 font-semibold">
              Start Date
            </p>
            <p className="text-sm leading-none">2023-06-01</p>
          </div>
          <div className="space-y-1">
            <p className="leading-none text-gray-600 font-semibold">End Date</p>
            <p className="text-sm leading-none">2023-06-07</p>
          </div>
        </div>
        <div className="flex items-center">
          <Button asChild variant="outline" size="sm">
            <Link href="/" className="flex items-center space-x-2">
              <ChevronLeft size={24} className="" /> Back to Plans
            </Link>
          </Button>
          <div className="ml-auto flex items-center space-x-2">
            <EditPlanDialog
              openButtonComponent={
                <Button
                  className="rounded-full border-gray-200 border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:border-gray-800 dark:hover:border-gray-700"
                  size="sm"
                  variant="outline"
                >
                  <FileEditIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              }
            />
            <RemovePlanDialog
              openButtonComponent={
                <Button
                  className="rounded-full border-gray-200 border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:border-gray-800 dark:hover:border-gray-700"
                  size="sm"
                  variant="destructive"
                >
                  <TrashIcon className="w-4 h-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function FileEditIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}

function TrashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
