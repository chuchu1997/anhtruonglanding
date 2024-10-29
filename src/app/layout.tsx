import type { Metadata } from "next";
import { Open_Sans, Pacifico, Roboto_Mono, Cuprum } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
// import PageTransition from "@/components/PageTransition";
// import StairEffect from "@/components/StairEffect";
import BlockSidebar from "@/components/BlockSidebar";
import Footer from "@/components/Footer";
import DockBottomContact from "@/components/DockBottomContact";
import { GlobalProvider } from "@/GlobalProvider";
import Categories from "@/components/Categories";
import CustomBreadcums from "@/components/CustomBreadcums";

const jetbrains = Open_Sans({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["vietnamese"],
  variable: "--font-pacifico",
});

const cuprum = Cuprum({
  subsets: ["vietnamese"],
  variable: "--font-cuprum",
});

{
  /* <meta name="description" content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!">
<meta property="og:title" content="Add a Shopping Cart to Any Website in Minutes - Snipcart">
<meta property="og:description" content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!">
<meta property="og:url" content="https://snipcart.com/">
<meta property="og:type" content="website"></meta> */
}
export const metadata: Metadata = {
  title: "Cửa hàng gia dụng hiện đại chuyên cung cấp các mặt hàng gia dụng hiện đại cũng phục vụ cho cuộc sống và máy massage",
  description: "Cửa hàng gia dụng hiện đại chuyên cung cấp các mặt hàng gia dụng hiện đại cũng phục vụ cho cuộc sống và máy massage cổ vai gáy ",
  verification: {
    google: "google-site-verification=s3Gv5MqWmRlLv82jIT0U54-8KIepgNzaFL1EVzzW74g",
  },
  openGraph: {
    title: "Cửa hàng gia dụng hiện đại chuyên cung cấp các mặt hàng gia dụng hiện đại cũng phục vụ cho cuộc sống và máy massage",
    locale: "vi_VN",
    type: "website",
    url: "https://bancatgach.com",
    description: "Cửa hàng gia dụng hiện đại chuyên cung cấp các mặt hàng gia dụng hiện đại cũng phục vụ cho cuộc sống ",
    siteName: "giadung",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "standard",
    "max-snippet": 1,
    "max-video-preview": -1,
  },

  keywords: [
    "maymassage",
    "maymassagecovaigay",
    "giadungthongminh",
    "giadung",
    "giadunghiendai",
    "nhacua",
    "linhkiendoisong",
    "giadungnhabep",
    "giadungcuocsong",
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
      <body className={`${jetbrains.variable} ${pacifico.variable}  ${cuprum.variable}`} suppressHydrationWarning={true}>
        {/* <div className="min-h-[500px] pt-[40px]">{children}</div> */}

        <GlobalProvider>
          <Header />

          <div className="min-h-[500px] pt-[180px]">
            {/* <CustomBreadcums /> */}
            <Categories></Categories>

            {children}
          </div>
        </GlobalProvider>

        {/* <BlockSidebar />
        <DockBottomContact /> */}
        {/* <StairEffect /> */}
        {/* <PageTransition></PageTransition> */}

        {/* <Footer /> */}
      </body>
    </html>
  );
}
