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
  title: "Phao hạ thuỷ sà lan - Đêm chống va (Fender) tại Việt Nam.",
  description:
    "Công ty TNHH TM XNK Biển Đông - Túi khí Biển Đông là nhà cung cấp giải pháp Phao túi khí hạ thuỷ – Đệm chống va (Fender) – Đệm chống va cầu cảng cho ngành Đóng tàu và Hàng hải Việt Nam.",
  verification: {
    google: "google-site-verification=QDbAh8EHR6zGyysSsEgdHt97muEmEf56VYCaAV3HtKI",
  },
  openGraph: {
    title: "Công ty TNHH TM XNK Biển Đông",
    locale: "vi_VN",
    type: "website",
    url: "https://phaohathuy.com",
    description:
      "Công ty TNHH TM XNK Biển Đông - Túi khí Biển Đông là nhà cung cấp giải pháp Phao túi khí hạ thuỷ – Đệm chống va (Fender) – Đệm chống va cầu cảng  - Linh kiện tàu thủy - xà lang cho ngành Đóng tàu và Hàng hải Việt Nam.",
    siteName: "Phao hạ thủy",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "standard",
    "max-snippet": 1,
    "max-video-preview": -1,
  },

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
    "xưởng đóng tàu",
    "đóng xà lan",
    "đóng tàu",
    "xưởng đóng xà lan",
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
