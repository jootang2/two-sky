import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 투스카이 수학과학 학원",
    default: "투스카이 수학과학 학원",
  },
  description: "투스카이 수학과학 학원 — 상동·송도·청라 3개 교육원. 중등·고등 수학·과학 전문, 1:1 개별 클리닉.",
  keywords: ["수학학원", "과학학원", "상동학원", "부천학원", "투스카이", "중등수학", "고등수학", "수능수학"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
