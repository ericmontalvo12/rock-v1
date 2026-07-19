import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import { PasswordGate } from "@/components/PasswordGate";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/logo-new.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-new.png", sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/logo-new.png", sizes: "180x180" },
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
          <PasswordGate>
            <Providers>{children}</Providers>
          </PasswordGate>
        </body>
    </html>
  );
}
