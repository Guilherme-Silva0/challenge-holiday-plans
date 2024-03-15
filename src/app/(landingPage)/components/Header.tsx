import Link from "next/link";
import { MountainIcon } from "@/components/global/MountainIcon";
import { auth } from "@/services/auth";
import { UserAvatar } from "@/components/global/UserAvatar";

export async function Header() {
  const session = await auth();

  return (
    <header className="px-6 lg:px-8 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Holiday Plans</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {session?.user?.email ? (
          <UserAvatar email={session.user.email} />
        ) : (
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/auth"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
