import { ReactNode } from "react";

export function Button({
  children,
  size,
}: {
  children: ReactNode;
  size?: string;
  variant?: string;
}) {
  return <button>{children}</button>;
}
