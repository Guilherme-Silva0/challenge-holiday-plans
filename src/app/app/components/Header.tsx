import { MountainIcon } from "@/components/global/MountainIcon";
import { UserAvatar } from "@/components/global/UserAvatar";
import { auth } from "@/services/auth";
import Link from "next/link";

export async function Header() {
  const session = await auth();

  return (
    <header className="flex items-center justify-between px-5 py-2.5 lg:py-4">
      <div className="gap-2 flex items-center">
        <Link href="/">
          <MountainIcon className="w-6 h-6 -mt-1" />
        </Link>
        <h1 className="text-lg font-semibold tracking-wide">Holiday Plans</h1>
      </div>
      {session?.user?.email && <UserAvatar email={session?.user?.email} />}
    </header>
  );
}
