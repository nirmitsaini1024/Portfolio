import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/navbar";
import { Footer } from "./components/footer";

const geistSans = localFont({
  src: "./projects/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./projects/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nirmit Saini | Web Developer Portfolio",
  description:
    "Explore the portfolio of Nirmit Saini, showcasing projects, skills, and expertise in web development, React, and blockchain technology.",
  keywords: [
    "Nirmit Saini",
    "Web Developer Portfolio",
    "React Developer",
    "Blockchain Projects",
    "Frontend Developer",
    "Next.js Portfolio",
  ],
  authors: [
    { name: "Nirmit Saini", url: "https://nirmitsaini.10xdevs.in" }, 
  ],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Nirmit Saini | Web Developer Portfolio",
    description:
      "Discover the projects and expertise of Nirmit Saini in web and blockchain development.",
    url: "https://nirmitsaini.10xdevs.in",
    type: "website",
    locale: "en_IN", 
  },
  twitter: {
    card: "summary",
    site: "https://twitter.com/nirmit_saini",
    title: "Nirmit Saini | Web Developer Portfolio",
    description:
      "Explore Nirmit Saini's portfolio featuring web development projects and skills.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900 text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
