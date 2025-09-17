import Image from "next/image";

// import dynamic from "next/dynamic";

// const SectionTitle = dynamic(
//   () => import("@/components/SectionTitle"),
//   {ssr:false}
// );

import SectionTitle from "@/components/SectionTitle";

// const DynamicPhoto = dynamic(() => import("@/components/Photo"), {
//   ssr:false
// });

// const DynamicServices = dynamic(() => import("@/components/Services"), {
//   ssr:false
// });

import DynamicServices from  "@/components/Services";

import DynamicCarouselProducts from "@/components/CarouselProducts";

// const DynamicCarouselProducts = dynamic(
//   () => import("@/components/CarouselProducts"),
//   {
//     ssr:false
//   }
// );
import DynamicCarouselBanner from "@/components/CarouselBanner";

// const DynamicCarouselBanner = dynamic(() => import("@/components/CarouselBanner"), {
//   ssr: false,
// });
import DynamicRenderContentForSection from "@/components/RenderContentForSection";
// const DynamicRenderContentForSection = dynamic(
//   () => import("@/components/RenderContentForSection"),
//   {
//     ssr:false
//   }
// );
import DynamicNews from "@/components/News";
// const DynamicNews = dynamic(() => import("@/components/News"), {});
import { data } from "@/data/data";
import CarouselBanner from "@/components/CarouselBanner";
export default function Home() {
  return (
    <main className="landing-page">
      <section className="container my-4 h-full mx-auto ">
    
        <section className="container my-8 h-full mx-auto  ">
          <CarouselBanner listImages={data.listBannerImages} />
        </section>

        <section className="container my-8 h-full mx-auto mt-[20px] xl:mt-[80px] ">
          <SectionTitle title="Các Chứng Chỉ Và Đối Tác " />

          <div className="certicate relative h-[300px] xl:h-[500px] w-full mt-[20px] ">
            <Image
              src="/certicate/certicate.jpg"
              alt="ccs"
              fill
              style={{ objectFit: "contain" }}
              quality={80}
          
            ></Image>
          </div>
          <div className="certicate relative h-[180px] xl:h-[300px] w-full mt-[20px] ">
            <Image
              src="/certicate/2.jpg"
              alt="ccs"
              fill
              style={{ objectFit: "contain" }}
            quality={80}
             
            ></Image>
          </div>
          <div className="ccs relative h-[80px] w-full ">
            <Image
              src="/ccs/ccs.jpg"
              alt="ccs"
              fill
              style={{ objectFit: "contain" }}
              quality={80}
            
            ></Image>
          </div>
        </section>

        {/* <div className="shortDescription">
          <ShortDescriptionWithCount />
        </div> */}
      </section>
      <section className=" container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <SectionTitle title="Các Sản Phẩm Chủ Đạo Của Công Ty " />
        <DynamicServices />
      </section>
      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <SectionTitle title="Các Sản Phẩm Nổi Bật " />
        <DynamicCarouselProducts listImages={data.listHotProductsImage} />
      </section>

      <section
        id="phaohathuy"
        className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] "
      >
        <SectionTitle title="Phao Túi Khí Hạ Thủy " />
        <DynamicRenderContentForSection listItems={data.tuikhihathuyItems} />
      </section>
      <section
        id="demchongvacau"
        className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] "
      >
        <SectionTitle title="Đệm Chống Va Cầu Cảng " />
        <DynamicRenderContentForSection
          listItems={data.demchongvacaucangItems}
        />
      </section>

      <section
        id="rubberfender"
        className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] "
      >
        <SectionTitle title="Đệm Chống Va Tàu " />
        <DynamicRenderContentForSection listItems={data.demchongvatauItems} />
      </section>
      <section
        id="mayphunxitapluccao"
        className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] "
      >
        <SectionTitle title="Máy Phun Xịt Áp Lực Cao " />
        <DynamicRenderContentForSection
          listItems={data.mayphunxitapluccaoItems}
        />
      </section>
      {/* THAY = CHO THUE  */}
      {/* <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <SectionTitle title="Hộp Số Tàu Thủy" />
        <RenderContentForSection listItems={hopsotauthuyItems} />
      </section> */}
      <section
        id="neo"
        className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] "
      >
        <SectionTitle title="Neo Và Xích Neo Tàu Thủy" />
        <DynamicRenderContentForSection listItems={data.neotauItems} />
      </section>
      <section
        id="dichvuchothue"
        className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] "
      >
        <SectionTitle title="Dịch Vụ Cho Thuê Túi Khí" />
        <DynamicCarouselBanner listImages={data.listDichVuChoThueImages} />

        {/* <RenderContentForSection listItems={neotauItems} /> */}
      </section>

      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <SectionTitle title="Video sản phẩm" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[18px]">
          <video controls aria-label="Video player" className="h-full w-full">
            <source src={"/youtubeVideo/1.mp4"} type="video/mp4" />
          </video>
          <video controls aria-label="Video player" className="h-full w-full">
            <source src={"/youtubeVideo/2.mp4"} type="video/mp4" />
          </video>
        </div>
        {/* <DynamicNews /> */}
      </section>

      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <SectionTitle title="Các dự án tiêu biểu" />
  
        <DynamicNews />
      </section>
    </main>
  );
}
