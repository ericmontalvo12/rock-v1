import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Rock Mountain Performance | Clinically Dosed Testosterone Support",
  description:
    "Science-backed testosterone support formula designed to support healthy testosterone levels, improve training performance, and optimize daily vitality.",
  keywords: [
    "testosterone support",
    "peak performance",
    "strength",
    "energy",
    "recovery",
    "clinically dosed",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="min-h-screen bg-background antialiased overflow-x-hidden">
          <Providers>{children}</Providers>
        </body>
    </html>
  );
}
