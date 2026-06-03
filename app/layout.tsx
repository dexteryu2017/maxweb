import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MaxYu's AI 作品集",
  description: "MaxYu 的 AI 游戏、应用与创作展示",
  openGraph: {
    title: "MaxYu's AI 作品集",
    description: "MaxYu 的 AI 游戏、应用与创作展示",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
