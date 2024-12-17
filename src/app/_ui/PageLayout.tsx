import { AuthInfoProvider } from "@/entities/auth/model/client";
import { checkIsAuthInServer } from "@/entities/auth/model/server";
import { getTokenWithServer } from "@/shared/lib/server";
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
  const token = await getTokenWithServer();
  const isAuth = await checkIsAuthInServer();

  return (
    <AuthInfoProvider initialState={{ isAuth, token }}>
      {isHeader && <Header />}
      {children}
      {isCheckAuthInClient && <CheckAuth />}
    </AuthInfoProvider>
  );
};
