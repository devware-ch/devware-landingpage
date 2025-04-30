import { Metadata } from "next";
import { Geist, Geist_Mono, Syne, Spectral } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Entwicklung von Webseiten und Software in der Schweiz | devware.",
  description:
    "Professionelle Webentwicklung, Design und Software-Lösungen für Ihr Unternehmen in der Schweiz.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-spectral",
  weight: ["200", "300", "400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${spectral.variable} antialiased min-h-screen`}
    >
      <body className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
