import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Package } from "react-feather";
import Photo from "@/components/Photo";
import Services from "@/components/Services";
import SectionTitle from "@/components/SectionTitle";
import CarouselProducts from "@/components/CarouselProducts";

import RenderContentForSection from "@/components/RenderContentForSection";
import News from "@/components/News";
import Link from "next/link";

import dynamic from "next/dynamic";

const DynamicSectionTitle = dynamic(() => import("@/components/SectionTitle"), {});
const DynamicPhoto = dynamic(() => import("@/components/Photo"), {});

const DynamicServices = dynamic(() => import("@/components/Services"), {});

const DynamicCarouselProducts = dynamic(() => import("@/components/CarouselProducts"), {});

const DynamicRenderContentForSection = dynamic(() => import("@/components/RenderContentForSection"), {});
const DynamicNews = dynamic(() => import("@/components/News"), {});

export default function Home() {
  let listHotProductsImage = [
    "/sanphamnoibat/1.png",
    "/sanphamnoibat/2.png",
    "/sanphamnoibat/3.png",
    "/sanphamnoibat/4.png",
    "/sanphamnoibat/5.png",
    "/sanphamnoibat/6.png",
  ];
  let listDichVuChoThueImages = [
    "/dichvuchothuetuikhi/7.png",
    "/dichvuchothuetuikhi/8.png",
    "/dichvuchothuetuikhi/9.png",
    "/dichvuchothuetuikhi/10.png",
  ];
  let tuikhihathuyItems = [
    {
      title: "Túi khí trục vớt tàu D 2m x 14m",
      imageSrc: "/phaotuikhihathuy/13.png",
      href: "https://tuikhibiendong.com/tui-khi-truc-vot-tau-d2m-14m/",
    },
    {
      title: "Túi khí hạ thủy tàu D 2m x 10m",
      imageSrc: "/phaotuikhihathuy/14.png",
      href: "https://tuikhibiendong.com/tui-khi-ha-thuy-tau-d2m-10m/",
    },
    {
      title: "Phao hạ thủy tàu D 1,8m x 18m",
      imageSrc: "/phaotuikhihathuy/15.png",
      href: "https://tuikhibiendong.com/phao-ha-thuy-tau-d1-8m-18m/",
    },
    {
      title: "Túi khí nâng hạ tàu 1,8m x 13m",
      imageSrc: "/phaotuikhihathuy/16.png",
      href: "https://tuikhibiendong.com/tui-khi-nang-ha-tau-1-8m-13m/",
    },
    {
      title: "Túi khí nâng hạ tàu 1,8m x 13m",
      imageSrc: "/phaotuikhihathuy/17.png",
      href: "https://tuikhibiendong.com/tui-khi-nang-ha-tau-1-8m-13m/",
    },
  ];

  let demchongvacaucangItems = [
    {
      title: "Fender D & Vuông",
      imageSrc: "/demchongvacaucang/9.png",
      href: "https://tuikhibiendong.com/fender-d-vuong/",
    },
    {
      title: "Fender kéo",
      imageSrc: "/demchongvacaucang/10.png",
      href: "https://tuikhibiendong.com/fender-keo/",
    },
    {
      title: "Phụ kiện & sửa chữa",
      imageSrc: "/demchongvacaucang/11.png",
      href: "https://tuikhibiendong.com/phu-kien-sua-chua/",
    },
    {
      title: "Fender hình trụ",
      imageSrc: "/demchongvacaucang/12.png",
      href: "https://tuikhibiendong.com/fender-hinh-tru/",
    },
  ];

  let demchongvatauItems = [
    {
      title: "Đệm chống va",
      imageSrc: "/demchongvatau/5.png",
      href: "https://tuikhibiendong.com/dem-chong-va/",
    },
    {
      title: "Đệm chống va Yokohama",
      imageSrc: "/demchongvatau/6.png",
      href: "https://tuikhibiendong.com/dem-chong-va-yokohama/",
    },
    {
      title: "Đệm chống va chắn bùn",
      imageSrc: "/demchongvatau/7.png",
      href: "https://tuikhibiendong.com/dem-chong-va-chan-bun/",
    },
    {
      title: "Đệm chống va đúc khuôn",
      imageSrc: "/demchongvatau/8.png",
      href: "https://tuikhibiendong.com/dem-chong-va-duc-khuon/",
    },
  ];

  let mayphunxitapluccaoItems = [
    {
      title: "Showroom Densin",
      imageSrc: "/mayphunxitapluccao/18.png",
      href: "https://tuikhibiendong.com/showroom-densin/",
    },
    {
      title: "Máy phun áp lực nước nóng DENSIN H200E",
      imageSrc: "/mayphunxitapluccao/19.png",
      href: "https://tuikhibiendong.com/may-phun-ap-luc-nuoc-nong-densin-h200e/",
    },
    {
      title: "Máy phun áp lực nước nóng DENSIN H110E",
      imageSrc: "/mayphunxitapluccao/20.png",
      href: "https://tuikhibiendong.com/may-phun-ap-luc-nuoc-nong-densin-h110e/",
    },
    {
      title: "Máy phun áp lực cao Densin Mermaid E-1100/16",
      imageSrc: "/mayphunxitapluccao/21.png",
      href: "https://tuikhibiendong.com/may-phun-ap-luc-cao-densin-mermaide-1100-16/",
    },
  ];

  let neotauItems = [
    {
      title: "Neo tàu",
      imageSrc: "/neo/26.png",
      href: "https://tuikhibiendong.com/neo-tau-5/",
    },
    {
      title: "Neo tàu",
      imageSrc: "/neo/27.png",
      href: "https://tuikhibiendong.com/neo-tau-5/",
    },
    {
      title: "Neo tàu",
      imageSrc: "/neo/28.png",
      href: "https://tuikhibiendong.com/neo-tau-5/",
    },
    {
      title: "Neo tàu",
      imageSrc: "/neo/29.png",
      href: "https://tuikhibiendong.com/neo-tau-5/",
    },
  ];

  return (
    <main className="landing-page">
      <section className="container my-4 h-full mx-auto ">
        <div className="gap-4 flex flex-col md:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none pb-4">
            <h1 className="h2 mb-6 ">
              Công ty TNHH TM XNK
              <br />
              <span className="text-accent ">Biển Đông</span>
            </h1>
            <p className="max-w-[500px] mb-8 text-black/80">
              Nhà cung cấp giải pháp Phao túi khí hạ thuỷ Đệm chống va (Fender) – Đệm chống va cầu cảng cho ngành Đóng tàu và Hàng hải Việt Nam.
            </p>
            <div className="action-btn flex flex-col xl:flex-row items-center gap-8">
              <Link href="tel:0869229639">
                <Button variant={"outline"} size={"lg"} className="uppercase flex items-center gap-2">
                  <span>Tư vấn</span>
                  <Package />
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <DynamicPhoto />
          </div>
        </div>

        <section className="container my-8 h-full mx-auto mt-[20px] xl:mt-[80px] ">
          <DynamicSectionTitle title="Các Chứng Chỉ Và Đối Tác " />
          <div className="certicate relative h-[300px] xl:h-[500px] w-full mt-[20px] ">
            <Image src="/certicate/certicate.jpg" alt="ccs" fill objectFit="contain" quality={60} priority></Image>
          </div>
          <div className="ccs relative h-[120px] w-full ">
            <Image src="/ccs/ccs.jpg" alt="ccs" fill objectFit="contain" quality={60} priority></Image>
          </div>
        </section>

        {/* <div className="shortDescription">
          <ShortDescriptionWithCount />
        </div> */}
      </section>
      <section className=" container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Các Sản Phẩm Chủ Đạo Của Công Ty " />
        <DynamicServices />
      </section>
      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Các Sản Phẩm Nổi Bật " />
        <DynamicCarouselProducts listImages={listHotProductsImage} />
      </section>

      <section id="phaohathuy" className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Phao Túi Khí Hạ Thủy " />
        <DynamicRenderContentForSection listItems={tuikhihathuyItems} />
      </section>
      <section id="demchongvacau" className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Đệm Chống Va Cầu Cảng " />
        <DynamicRenderContentForSection listItems={demchongvacaucangItems} />
      </section>

      <section id="rubberfender" className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Đệm Chống Va Tàu " />
        <DynamicRenderContentForSection listItems={demchongvatauItems} />
      </section>
      <section id="mayphunxitapluccao" className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Máy Phun Xịt Áp Lực Cao " />
        <DynamicRenderContentForSection listItems={mayphunxitapluccaoItems} />
      </section>
      {/* THAY = CHO THUE  */}
      {/* <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <SectionTitle title="Hộp Số Tàu Thủy" />
        <RenderContentForSection listItems={hopsotauthuyItems} />
      </section> */}

      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Dịch Vụ Cho Thuê Túi Khí" />
        <DynamicCarouselProducts listImages={listDichVuChoThueImages} />

        {/* <RenderContentForSection listItems={neotauItems} /> */}
      </section>

      <section id="neo" className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Neo Và Xích Neo Tàu Thủy" />
        <DynamicRenderContentForSection listItems={neotauItems} />
      </section>

      {/* <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <SectionTitle title="Video Sản Phẩm" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4 xl:px-0">
          <iframe
            className="w-full h-[300px]"
            src="https://www.youtube.com/embed/V66Lc_RrWOE"
            title="Phao túi khí hạ thủy tàu | Công đoạn bàn giao túi khí hạ thuỷ D1.8 x 13m tại xưởng đóng tàu"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <iframe
            className="w-full h-[300px]"
            src="https://www.youtube.com/embed/WpySAlW6IpQ"
            title="Quy trình sản xuất phần chóp của Túi khí Biển Đông"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section> */}

      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Các dự án tiêu biểu" />
        <DynamicNews />
      </section>
    </main>
  );
}
