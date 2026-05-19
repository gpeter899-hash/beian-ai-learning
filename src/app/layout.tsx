import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "北安國中七年級 AI 學習輔導系統",
  description: "臺北市立北安國中七年級 AI 個人化學習輔導 MVP"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
