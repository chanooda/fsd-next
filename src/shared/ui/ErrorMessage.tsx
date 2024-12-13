import { ReactNode } from "react";

export const ErrorMessage = ({ children }: { children: ReactNode }) => {
  return <p className="text-end text-sm text-red-400">{children}</p>;
};
