import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="flex h-svh min-h-svh flex-col">{children}</div>;
};
