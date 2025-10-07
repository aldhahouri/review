import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Dashboard",
  description: "A modern analytics dashboard starter built with Next.js and Tailwind CSS.",
  metadataBase: new URL("https://smart-dashboard.local")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950`}>{children}</body>
    </html>
  );
}
