import FakeTubeNav from "./components/FakeTubeNav";
import type { Metadata } from "next";
import React from "react";
import "@/app/globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "FakeTube",
  description: "Page Demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <FakeTubeNav>
          <main className="min-h-screen relative md:pl-16">{children}</main>
        </FakeTubeNav>
      </body>
    </html>
  );
}
