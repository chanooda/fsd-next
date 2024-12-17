import { checkIsAuthInServer } from "@/entities/auth/model/server";
import type { Metadata } from "next";
import { QueryProvider } from "./_api/client";
import { Layout } from "./_ui/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "FSD-NextJS",
  description: "FSD Tutorial, Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let isAuth = await checkIsAuthInServer();

  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <Layout>{children}</Layout>
        </QueryProvider>
      </body>
    </html>
  );
}
