import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mololuwa Ajiteru | Data Analyst & Business Analyst",
  description:
    "Data Analyst and Business Analyst with hands-on project experience since 2023. Skilled at turning messy real-world data into clear, actionable insights that improve decisions, revenue, and operations.",
  openGraph: {
    title: "Mololuwa Ajiteru | Data Analyst & Business Analyst",
    description:
      "Data Analyst and Business Analyst with hands-on project experience since 2023. Skilled at turning messy real-world data into clear, actionable insights.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mololuwa Ajiteru | Data Analyst & Business Analyst",
    description:
      "Data Analyst and Business Analyst with hands-on project experience since 2023.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
