import { Button } from "@/components/ui/button";
import Link from "next/link";

export function WelcomeSection() {
  return (
    <section className="w-full h-[calc(100vh-8rem)] flex items-center justify-center lg:h-[calc(100vh-3.5rem)]">
      <div className="container flex flex-col items-center justify-center space-y-4 px-4 text-center md:px-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Plan Your Perfect Vacation
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            The only app you need to plan your dream vacation.
          </p>
        </div>
        <div className="flex space-x-2">
          <Button asChild>
            <Link href="/auth">Get Started</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
