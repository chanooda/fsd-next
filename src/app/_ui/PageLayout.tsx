import { AuthInfoProvider } from "@/entities/auth/model/client";
import { checkIsAuthInServer } from "@/entities/auth/model/server";
import { Header } from "@/widget/header/ui";
import { ReactNode } from "react";
import { CheckAuth } from "../_model/CheckAuth";

interface PageLayoutProps {
  children: ReactNode;
  isHeader?: boolean;
  isCheckAuthInClient?: boolean;
}

export const PageLayout = async ({
  children,
  isHeader = true,
  isCheckAuthInClient = true,
}: PageLayoutProps) => {
  const isAuth = await checkIsAuthInServer();

  return (
    <AuthInfoProvider initialState={{ isAuth }}>
      {isHeader && <Header />}
      {children}
      {isCheckAuthInClient && <CheckAuth />}
    </AuthInfoProvider>
  );
};
