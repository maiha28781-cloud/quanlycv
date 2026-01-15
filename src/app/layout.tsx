import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quan Ly CV",
  description: "Dashboard shell for Quan Ly CV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
