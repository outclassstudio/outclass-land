import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Theme from "@/components/common/theme-provider";

const font = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Outclass Land",
    default: "Outclass Land",
  },
  description: "나를 발견하고 성장하는 곳",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-white text-neutral-800 dark:bg-neutral-900 
        dark:text-white max-w-screen-sm sm:w-full sm:max-w-full mx-auto list-disc`}
      >
        <Header />
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
