import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
// import PageTransition from "@/components/PageTransition";
// import StairEffect from "@/components/StairEffect";
import BlockSidebar from "@/components/BlockSidebar";
import Footer from "@/components/Footer";
import DockBottomContact from "@/components/DockBottomContact";

const jetbrains = Open_Sans({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
});

{
  /* <meta name="description" content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!">
<meta property="og:title" content="Add a Shopping Cart to Any Website in Minutes - Snipcart">
<meta property="og:description" content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!">
<meta property="og:url" content="https://snipcart.com/">
<meta property="og:type" content="website"></meta> */
}
export const metadata: Metadata = {
  title: "Bàn Cắt Gạch PanaPro - Bàn Cắt Gạch số 1 tại việt nam .",
  description:
    "Công ty TNHH Máy Xây Dựng Mới là công ty cung cấp các loại máy cắt gạch , dụng cụ cầm tay , và các dụng cụ hỗ trợ xây dựng số 1 tại việt nam",
  verification: {
    google: "google-site-verification=s3Gv5MqWmRlLv82jIT0U54-8KIepgNzaFL1EVzzW74g",
  },
  openGraph: {
    title: "Bàn Cắt Gạch PanaPro - Bàn Cắt Gạch số 1 tại việt nam",
    locale: "vi_VN",
    type: "website",
    url: "https://bancatgach.com",
    description:
      "Công ty TNHH Máy Xây Dựng Mới là công ty cung cấp các loại máy cắt gạch , dụng cụ cầm tay , và các dụng cụ hỗ trợ xây dựng số 1 tại việt nam",
    siteName: "Bàn cắt gạch",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "standard",
    "max-snippet": 1,
    "max-video-preview": -1,
  },

  keywords: [
    // "phao hạ thủy ",
    // "rubberfender",
    // "túi khí hạ thủy",
    // "đệm chống va cầu cảng",
    // "máy phun xịt áp lực cao",
    // "đệm chống va tàu",
    // "neo",
    // "neo và xích neo tàu thủy",
    // "linh kiện tàu",
    // "linh kiện tàu thủy",
    // "xưởng đóng tàu",
    // "đóng xà lan",
    // "đóng tàu",
    // "xưởng đóng xà lan",
    "maycatgach",
    "bancatgach",
    "bàn cắt gạch",
    "máy cắt gạch",
    "dụng cụ điện cầm tay",
    "dung cu dien cam tay",
    "mayxaydung",
    "máy xây dựng",
    "mayxaydungmoi",
    "ban cat gach co dem",
    "bàn cắt gạch có đệm",
    "ban cat gach khong dem",
    "bàn cắt gạch không đệm",
    "ban cat gach ryobi",
    "bàn cắt gạch ryobi",
    "bàn cắt gạch panapro",
    "ban cat gach panapro",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <body className={jetbrains.variable} suppressHydrationWarning={true}>
        <Header />
        <BlockSidebar />
        <DockBottomContact />
        {/* <StairEffect /> */}
        {/* <PageTransition></PageTransition> */}
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
