import Image from "next/image";
import Link from "next/link";

export function TopDestinationsSession() {
  return (
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
        <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="space-y-2 w-full">
            <div className="aspect-card overflow-hidden rounded-xl h-[210px] shadow-lg w-full">
              <Image
                alt="Santorini, Greece"
                className="object-cover object-center w-full h-full"
                height="230"
                src="/ima-ges/santorini.jpg"
                width="350"
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

          <div className="space-y-2 w-full">
            <div className="aspect-card overflow-hidden rounded-xl w-full h-[210px] shadow-lg">
              <Image
                alt="New York City, USA"
                className="object-cover object-center w-full h-full"
                height="230"
                src="/ima-ges/newyork.jpg"
                width="350"
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
              The city that never sleeps. Experience the energy of Times Square
              and the tranquility of Central Park.
            </p>
          </div>

          <div className="space-y-2 w-full">
            <div className="aspect-card overflow-hidden rounded-xl w-full h-[210px] shadow-lg">
              <Image
                alt="Tokyo, Japan"
                className="object-cover object-center w-full h-full"
                height="230"
                src="/ima-ges/tokyo.jpg"
                width="350"
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
            <h3 className="text-xl font-bold tracking-tighter">Tokyo, Japan</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Immerse yourself in the culture of the Far East. Discover ancient
              temples and futuristic skyscrapers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
