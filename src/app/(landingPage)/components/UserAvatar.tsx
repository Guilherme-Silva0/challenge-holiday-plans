"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useState } from "react";

type Props = {
  email: string;
};

export function UserAvatar({ email }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    signOut();
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="relative group"
      onClick={() => setIsDropdownOpen((e) => !e)}
    >
      <Avatar>
        <AvatarFallback className="bg-slate-800 text-slate-100 cursor-pointer">
          {email[0].toUpperCase()}
        </AvatarFallback>
      </Avatar>
      {isDropdownOpen && (
        <div className="absolute top-[calc(100%+6px)] right-1/2 translate-x-1/2  transition-all bg-zinc-100 rounded shadow-md">
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="font-semibold"
          >
            Logout
          </Button>
        </div>
      )}
    </div>
  );
}
