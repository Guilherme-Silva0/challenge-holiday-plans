import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Holiday Plans</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/auth"
          >
            Login
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full h-[calc(100vh-3.5rem)] flex items-center justify-center">
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
        <section
          id="features"
          className="flex items-center justify-center w-full min-h-[calc(100vh-3.5rem)] border-t"
        >
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why choose our app?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We offer a seamless experience with features designed to make
                your holiday planning stress-free.
              </p>
            </div>
            <div className="grid max-w-sm gap-4 items-start sm:grid-cols-2 md:max-w-4xl md:gap-6 lg:grid-cols-3 lg:gap-10">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Intuitive Interface</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  The application interface is designed to be user-friendly and
                  easy to use, making vacation planning an enjoyable experience.
                </p>
              </div>{" "}
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Creating Vacation Plans</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Users can create detailed plans for their vacation, including
                  destinations, dates and activities.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Plan View</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  User-created vacation plans are displayed neatly for easy
                  reference.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Plan Editing</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Users can make changes to existing plans, such as adding or
                  removing activities.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Deletion of Plans</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  The ability to delete old or unused plans is available to
                  users.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">
                  Login System with Magic Link
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Users can log in securely using magic links sent via email.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Top Holiday Destinations
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore these amazing locations and start planning your next
                adventure.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
              <div className="space-y-2">
                <div className="aspect-card overflow-hidden rounded-xl">
                  <Image
                    alt="Santorini, Greece"
                    className="object-cover object-center"
                    height="310"
                    src="/images/santorini.jpg"
                    style={{
                      aspectRatio: "550/310",
                      objectFit: "cover",
                    }}
                    width="550"
                  />
                </div>
                <p className="text-xs text-gray-500">
                  Photo by Alex Azabache:{" "}
                  <Link
                    target="_blank"
                    className="text-blue-600 hover:underline"
                    href="https://www.pexels.com/pt-br/foto/frio-com-frio-mar-cidade-3215009/"
                  >
                    Pexels
                  </Link>
                </p>
                <h3 className="text-xl font-bold tracking-tighter">
                  Santorini, Greece
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Stunning sunsets and crystal-clear waters make this island a
                  paradise.
                </p>
              </div>

              <div className="space-y-2">
                <div className="aspect-card overflow-hidden rounded-xl">
                  <Image
                    alt="New York City, USA"
                    className="object-cover object-center"
                    height="310"
                    src="/images/newyork.jpg"
                    style={{
                      aspectRatio: "550/310",
                      objectFit: "cover",
                    }}
                    width="550"
                  />
                </div>
                <p className="text-xs text-gray-500">
                  Photo by Victor Larracuente:{" "}
                  <Link
                    target="_blank"
                    className="text-blue-600 hover:underline"
                    href="https://www.pexels.com/pt-br/foto/horizonte-da-cidade-sob-o-ceu-branco-3968062/"
                  >
                    Pexels
                  </Link>
                </p>
                <h3 className="text-xl font-bold tracking-tighter">
                  New York City, USA
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  The city that never sleeps. Experience the energy of Times
                  Square and the tranquility of Central Park.
                </p>
              </div>

              <div className="space-y-2">
                <div className="aspect-card overflow-hidden rounded-xl">
                  <Image
                    alt="Tokyo, Japan"
                    className="object-cover object-center"
                    height="310"
                    src="/images/tokyo.jpg"
                    style={{
                      aspectRatio: "550/310",
                      objectFit: "cover",
                    }}
                    width="550"
                  />
                </div>
                <p className="text-xs text-gray-500">
                  Foto de Aleksandar Pasaric:{" "}
                  <Link
                    target="_blank"
                    className="text-blue-600 hover:underline"
                    href="https://www.pexels.com/pt-br/foto/rua-sob-o-ceu-nublado-1344537/"
                  >
                    Pexels
                  </Link>
                </p>
                <h3 className="text-xl font-bold tracking-tighter">
                  Tokyo, Japan
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Immerse yourself in the culture of the Far East. Discover
                  ancient temples and futuristic skyscrapers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function CalendarCheckIcon(props: SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}

function MapPinIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MartiniIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M8 22h8" />
      <path d="M12 11v11" />
      <path d="m19 3-7 8-7-8Z" />
    </svg>
  );
}

function MountainIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PlaneIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

function UmbrellaIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M22 12a10.06 10.06 1 0 0-20 0Z" />
      <path d="M12 12v8a2 2 0 0 0 4 0" />
      <path d="M12 2v1" />
    </svg>
  );
}

function WavesIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  );
}
