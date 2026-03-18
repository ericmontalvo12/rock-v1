import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import { PasswordGate } from "@/components/PasswordGate";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/logo-new.png",
    apple: "/logo-new.png",
  },
  title: "Rock Mountain Performance | Research-Aligned Testosterone Support",
  description:
    "Science-backed testosterone support formula designed to support healthy testosterone levels, improve training performance, and optimize daily vitality.",
  keywords: [
    "testosterone support",
    "peak performance",
    "strength",
    "energy",
    "recovery",
    "research-aligned doses",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background antialiased overflow-x-hidden">
          <Providers>
          <PasswordGate>{children}</PasswordGate>
        </Providers>
        </body>
    </html>
  );
}
