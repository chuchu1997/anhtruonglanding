import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/StairEffect";
import BlockSidebar from "@/components/BlockSidebar";
import Footer from "@/components/Footer";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],

  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Nhà phân phối phao hạ thủy trên toàn quốc   ",
  description:
    "Công ty TNHH TM XNK Biển Đông - Túi khí Biển Đông là nhà cung cấp giải pháp Phao túi khí hạ thuỷ – Đệm chống va (Fender) – Đệm chống va cầu cảng cho ngành Đóng tàu và Hàng hải Việt Nam.",

  keywords: [
    "phao hạ thủy ",
    "rubberfender",
    "túi khí hạ thủy",
    "đệm chống va cầu cảng",
    "máy phun xịt áp lực cao",
    "đệm chống va tàu",
    "neo",
    "neo và xích neo tàu thủy",
    "linh kiện tàu",
    "linh kiện tàu thủy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrains.variable} suppressHydrationWarning={true}>
        <Header />
        <BlockSidebar />
        {/* <StairEffect /> */}
        {/* <PageTransition></PageTransition> */}
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
