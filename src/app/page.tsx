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
const DynamicCarouselBanner = dynamic(() => import("@/components/CarouselBanner"));

const DynamicRenderContentForSection = dynamic(() => import("@/components/RenderContentForSection"), {});
const DynamicNews = dynamic(() => import("@/components/News"), {});
import { data } from "@/data/data";
import CarouselBanner from "@/components/CarouselBanner";
export default function Home() {
  return (
    <main className="landing-page">
      <section className="container my-4 h-full mx-auto ">
        {/* <div className="gap-4 flex flex-col md:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none pb-4">
            <h1 className="h2 mb-6 ">
              Công ty TNHH TM XNK 11
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
        </div> */}
        <section className="container my-8 h-full mx-auto  ">
          <CarouselBanner listImages={data.listBannerImages} />
        </section>

        <section className="container my-8 h-full mx-auto mt-[20px] xl:mt-[80px] ">
          <DynamicSectionTitle title="Các Chứng Chỉ Và Đối Tác " />

          <div className="certicate relative h-[300px] xl:h-[500px] w-full mt-[20px] ">
            <Image src="/certicate/certicate.jpg" alt="ccs" fill objectFit="contain" quality={60} priority></Image>
          </div>
          <div className="certicate relative h-[180px] xl:h-[300px] w-full mt-[20px] ">
            <Image src="/certicate/2.jpg" alt="ccs" fill objectFit="contain" quality={80} priority></Image>
          </div>
          <div className="ccs relative h-[80px] w-full ">
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
        <DynamicCarouselProducts listImages={data.listHotProductsImage} />
      </section>

      <section id="phaohathuy" className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Phao Túi Khí Hạ Thủy " />
        <DynamicRenderContentForSection listItems={data.tuikhihathuyItems} />
      </section>
      <section id="demchongvacau" className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Đệm Chống Va Cầu Cảng " />
        <DynamicRenderContentForSection listItems={data.demchongvacaucangItems} />
      </section>

      <section id="rubberfender" className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Đệm Chống Va Tàu " />
        <DynamicRenderContentForSection listItems={data.demchongvatauItems} />
      </section>
      <section id="mayphunxitapluccao" className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Máy Phun Xịt Áp Lực Cao " />
        <DynamicRenderContentForSection listItems={data.mayphunxitapluccaoItems} />
      </section>
      {/* THAY = CHO THUE  */}
      {/* <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <SectionTitle title="Hộp Số Tàu Thủy" />
        <RenderContentForSection listItems={hopsotauthuyItems} />
      </section> */}

      <section id="dichvuchothue" className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Dịch Vụ Cho Thuê Túi Khí" />
        <DynamicCarouselBanner listImages={data.listDichVuChoThueImages} />

        {/* <RenderContentForSection listItems={neotauItems} /> */}
      </section>

      <section id="neo" className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Neo Và Xích Neo Tàu Thủy" />
        <DynamicRenderContentForSection listItems={data.neotauItems} />
      </section>

      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Video sản phẩm" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[18px]">
          <video controls aria-label="Video player">
            <source src={"/youtubeVideo/1.mp4"} type="video/mp4" />
          </video>
          <video controls aria-label="Video player">
            <source src={"/youtubeVideo/2.mp4"} type="video/mp4" />
          </video>
        </div>
        {/* <DynamicNews /> */}
      </section>

      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Các dự án tiêu biểu" />
        <DynamicNews />
      </section>
    </main>
  );
}
