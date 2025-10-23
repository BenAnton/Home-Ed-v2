import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/Components/Navbar/Navbar";
import Footer from "@/app/Components/Footer/Footer";

// import { Charm } from "next/font/google";
//
// export const charm= Charm({
//     subsets: ["latin"],
//     weight: ["400"]
// })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home Edventurers",
  description: "Inspiring Curiosity, Wonder & Enchantment",
    icons: {
      icon: "/favicon.ico",
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <link
            href="https://fonts.googleapis.com/css2?family=Charm:wght@400&display=swap"
            rel="stylesheet"
        />
    </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <NavBar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
