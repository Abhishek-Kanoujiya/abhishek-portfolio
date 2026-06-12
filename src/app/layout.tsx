import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhishek Kanoujiya | SDE Portfolio & GATE Qualified CSE Student",
  description:
    "Professional software engineer portfolio of Abhishek Kanoujiya, B.Tech CSE student at PSIT Kanpur. GATE Qualified, specializing in C++, Python, DSA, OOPs, and Generative AI/ML applications.",
  keywords: [
    "Abhishek Kanoujiya",
    "Abhishek Kanoujiya Portfolio",
    "GATE CS",
    "B.Tech CSE PSIT",
    "Software Development Engineer Intern",
    "C++ SDE",
    "Python AI ML Developer",
    "PSIT Kanpur SDE",
    "ZopSmart SDE Intern",
  ],
  authors: [{ name: "Abhishek Kanoujiya", url: "https://github.com/Abhishek-Kanoujiya" }],
  creator: "Abhishek Kanoujiya",
  openGraph: {
    title: "Abhishek Kanoujiya | SDE Portfolio & GATE Qualified CSE Student",
    description:
      "GATE Qualified B.Tech CSE student at PSIT Kanpur. Specializing in C++, Python, DSA, and Generative AI/ML.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-violet-500/30 selection:text-violet-200">
        {children}
      </body>
    </html>
  );
}
