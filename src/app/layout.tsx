import type { Metadata } from "next";
import QueryProvider from "./_QueryProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "FSD-NextJS",
  description: "FSD Tutorial, Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}