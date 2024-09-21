import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";

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
        className={`${font.className} bg-neutral-900 text-white max-w-screen-sm mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
