import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using generic Google Font loader for now
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Business Financial Dashboard",
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
        {/* Newsreader Font */}
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        {/* Material Symbols */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-background-light dark:bg-background-dark text-text-main antialiased selection:bg-primary selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
