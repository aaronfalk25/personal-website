import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppWrapper } from "@/context";
import { Navbar } from "@/app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aaron Falk Website",
  description: "Aaron Falk, Computer Science, Student, Penn State University, Personal Website, Portfolio, About, Contact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>
          <Navbar />
          {children}
        </AppWrapper>
        </body>
    </html>
  );
}
