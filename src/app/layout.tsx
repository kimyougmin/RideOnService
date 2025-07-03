import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BasicHeader from "@/components/basicLayout/BasicHeader";
import BasicFooter from "@/components/basicLayout/BasicFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RideOn",
  description: "자전거 라이더를 위한 웹",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full block h-full dark:bg-black10`}
      >
      <BasicHeader/>
        {children}
      <BasicFooter/>
      </body>
    </html>
  );
}
