import type { Metadata } from "next";
// import { Inter } from "next/font/google"; // Removed Inter
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] }); 

export const metadata: Metadata = {
  title: "Financial Reports & Analytics",
  description: "Financial management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Manrope Font */}
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        {/* Material Symbols */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      {/* Updated body classes for new background and font */}
      <body className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
