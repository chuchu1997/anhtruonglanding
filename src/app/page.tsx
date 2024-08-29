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
const DynamicShapeSale = dynamic(() => import("@/components/ShapeSale"));
import { data } from "@/data/data";
import CarouselBanner from "@/components/CarouselBanner";
import ThongSoKyThuat from "@/components/ThongSoKyThuat";
import FormTuVan from "@/components/FormTuVan";
export default function Home() {
  return (
    <main className="landing-page">
      <section className="main-banner h-[200px] lg:h-[600px] md:h-[400px] relative rounded-md">
        <Image
          className="rounded-md"
          src="/banner/1.png"
          fill
          alt="bancatgachdemcaosu "
          style={{ objectFit: "contain" }}
          quality={60}
          priority
        ></Image>
      </section>
      <section className=" container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] " id="gioithieu">
        <DynamicSectionTitle title="Giá bán " />
        <div className="grid grid-cols-2 gap-4 ">
          <div className="flex flex-col">
            <div className="relative min-h-[300px] w-full mt-8 ">
              <Image
                src="/bancatgach/bancatgachdemcaosu.png"
                fill
                alt="bancatgachdemcaosu"
                style={{ objectFit: "contain" }}
                quality={60}
                priority
                className="shadow-md"
              ></Image>
            </div>
            <DynamicShapeSale saleOff={10} price={2199000}></DynamicShapeSale>
          </div>

          <div className="flex flex-col">
            <div className="relative min-h-[300px] w-full mt-8 ">
              <Image
                src="/bancatgach/bancatgachdemcaosu.png"
                fill
                alt="bancatgachdemcaosu"
                style={{ objectFit: "contain" }}
                quality={60}
                priority
                className="shadow-md"
              ></Image>
            </div>
            <DynamicShapeSale saleOff={10} price={2199000}></DynamicShapeSale>
          </div>
        </div>
        {/* <div className="my-[40px] text-[15px] text-black/80">
          <span className="font-semibold text-[16px]"> Bàn cắt gạch PANAPRO </span>
          là loại bàn cắt gạch bằng tay , giúp bạn cắt gạch men , gạch lát , gạch nền cực nhanh chỉ sau vài phút , đường cắt cực chuẩn và mịn đẹp .Bàn
          cắt gạch PANOPRO có độ dày cắt tối đa 14mm , có thể cắt theo đường thẳng , đường chéo tùy theo mục đích sử dụng của người sử dụng .
        </div>
        <div className="video-review">
          <video controls muted autoPlay className="w-full ">
            <source src={"/videobancatgach/1.mp4"} type="video/mp4" />
          </video>
        </div> */}

        {/* <DynamicServices /> */}
      </section>

      <section className=" container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] " id="gioithieu">
        <DynamicSectionTitle title="Giới Thiệu Về Sản Phẩm " />
        <div className="my-[40px] text-[15px] text-black/80">
          <span className="font-semibold text-[16px]"> Bàn cắt gạch PANAPRO </span>
          là loại bàn cắt gạch bằng tay , giúp bạn cắt gạch men , gạch lát , gạch nền cực nhanh chỉ sau vài phút , đường cắt cực chuẩn và mịn đẹp .Bàn
          cắt gạch PANOPRO có độ dày cắt tối đa 14mm , có thể cắt theo đường thẳng , đường chéo tùy theo mục đích sử dụng của người sử dụng .
        </div>
        <div className="video-review">
          <video controls muted autoPlay className="w-full ">
            <source src={"/videobancatgach/1.mp4"} type="video/mp4" />
          </video>
        </div>

        {/* <DynamicServices /> */}
      </section>

      <section className="my-[40px] container mx-auto">
        <DynamicSectionTitle title="Bàn Cắt Gạch Có Đệm" />
        <div className="wrapper-image relative h-[400px] lg:h-[700px] mt-[10px] shadow-xl rounded-md ">
          <Image
            src="/bancatgach/bancatgachdemcaosu.png"
            fill
            alt="bancatgachdemcaosu"
            style={{ objectFit: "contain" }}
            quality={60}
            priority
          ></Image>
        </div>
        <div className="mt-[20px] congdung">
          <h2 className="font-semibold">Công dụng</h2>
          <ul className="list-decimal ml-4 text-[14px]">
            <li>Đệm cao su tiêu chuẩn Japan</li>
            <li>Bàn cắt gạch nhôm nguyên khối cao cấp</li>
            <li>Tiêu chuẩn Japan</li>
            <li>Chuyên dụng: Gạch men – Gạch bóng kiếng – Gạch xương cá – Gạch bông – Gạch granite – Gạch ceramic – Gạch giả gỗ</li>
          </ul>
        </div>

        <div className="mt-[20px] uudiem">
          <h2 className="font-semibold">Ưu điểm</h2>
          <ul className="list-decimal ml-4 text-[14px]">
            <li>Đệm cao su nguyên khối khi đặt gạch không bị trơn trượt</li>
            <li>Cụm trợ lực để tách gạch dày dặn giúp giữ chắc chắn 2 cần trợ lực</li>
            <li>Thước đo kèm theo máy </li>
            <li>3 lưỡi dao cắt có thể cắt thằng , chéo tùy ý nhu cầu người sử dụng</li>
          </ul>
        </div>
        <DynamicShapeSale saleOff={10} price={2199000}></DynamicShapeSale>
        <Button>Đặt Hàng Ngay</Button>
      </section>

      <section className="my-[40px] container mx-auto">
        <DynamicSectionTitle title="Bàn Cắt Gạch Không Đệm" />
        <div className="wrapper-image relative h-[400px] lg:h-[700px] mt-[10px] shadow-xl rounded-md ">
          <Image
            src="/bancatgach/bancatgachdemcaosu.png"
            fill
            alt="bancatgachdemcaosu"
            style={{ objectFit: "contain" }}
            quality={60}
            priority
          ></Image>
        </div>
        <div className="mt-[20px] congdung">
          <h2 className="font-semibold">Công dụng</h2>
          <ul className="list-decimal ml-4 text-[14px]">
            <li>Bàn cắt gạch nhôm nguyên khối cao cấp</li>
            <li>Tiêu chuẩn Japan</li>
            <li>Chuyên dụng: Gạch men – Gạch bóng kiếng – Gạch xương cá – Gạch bông – Gạch granite – Gạch ceramic – Gạch giả gỗ</li>
          </ul>
        </div>

        <div className="mt-[20px] uudiem">
          <h2 className="font-semibold">Ưu điểm</h2>
          <ul className="list-decimal ml-4 text-[14px]">
            <li>2 đầu máy có chân đế thép nguyên khối dày , cứng cáp hơn rất nhiều sản phẩm cùng công dụng ngoài thị trường</li>
            <li>Cụm trợ lực để tách gạch dày dặn giúp giữ chắc chắn 2 cần trợ lực</li>
            <li>2 Thanh trượt bằng thép đặc 100% giúp giữ dao cắt gạch chắc chắn khi cắt</li>
            <li>Thước đo kèm theo máy </li>
            <li>3 lưỡi dao cắt có thể cắt thằng , chéo tùy ý nhu cầu người sử dụng</li>
          </ul>
        </div>
        <DynamicShapeSale saleOff={10} price={1999000}></DynamicShapeSale>
        <Button>Đặt Hàng Ngay</Button>
      </section>

      <section className="bg-[#E7EFFE] py-8">
        <section className="container mx-auto relative">
          <DynamicSectionTitle title="Thông Số Kỹ Thuật Sản Phẩm PANAPRO" />
          <ThongSoKyThuat />
          <div className="wrapper-image absolute md:top-[605px] lg:top-[600px] left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[350px] h-[350px]  md:w-[500px]  md:h-[550px]  mt-[10px]  ">
            <Image
              src="/bancatgach/bancatgachwithoutbackground.png"
              fill
              alt="bancatgachdemcaosu"
              style={{ objectFit: "contain" }}
              quality={60}
              priority
            ></Image>
          </div>
        </section>
      </section>
      <section className="py-[140px] bg-[#ccc]/30">
        <section className="container mx-auto relative">
          <DynamicSectionTitle title="ĐĂNG KÝ TƯ VẤN" />
          <FormTuVan />
        </section>
      </section>
      <section className="py-[100px]">
        <section className="container mx-auto relative">
          <DynamicSectionTitle title="Các sản phẩm PANAPRO khác" />
          <DynamicCarouselProducts listImages={data.listHotProductsImage}></DynamicCarouselProducts>
        </section>
      </section>
      {/* <section className="container my-4 h-full mx-auto ">
    
        <section className="container my-8 h-full mx-auto  ">
          <CarouselBanner listImages={data.listBannerImages} />
        </section>

        <section className="container my-8 h-full mx-auto mt-[20px] xl:mt-[80px] ">
          <DynamicSectionTitle title="Các Chứng Chỉ Và Đối Tác " />

          <div className="certicate relative h-[300px] xl:h-[500px] w-full mt-[20px] ">
            <Image src="/certicate/certicate.jpg" alt="ccs" fill style={{ objectFit: "contain" }} quality={60} priority></Image>
          </div>
          <div className="certicate relative h-[180px] xl:h-[300px] w-full mt-[20px] ">
            <Image src="/certicate/2.jpg" alt="ccs" fill style={{ objectFit: "contain" }} quality={80} priority></Image>
          </div>
          <div className="ccs relative h-[80px] w-full ">
            <Image src="/ccs/ccs.jpg" alt="ccs" fill style={{ objectFit: "contain" }} quality={60} priority></Image>
          </div>
        </section>

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

      <section id="neo" className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Neo Và Xích Neo Tàu Thủy" />
        <DynamicRenderContentForSection listItems={data.neotauItems} />
      </section>
      <section id="dichvuchothue" className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Dịch Vụ Cho Thuê Túi Khí" />
        <DynamicCarouselBanner listImages={data.listDichVuChoThueImages} />

    
      </section>

      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Video sản phẩm" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[18px]">
          <video controls aria-label="Video player" className="h-full w-full">
            <source src={"/youtubeVideo/1.mp4"} type="video/mp4" />
          </video>
          <video controls aria-label="Video player" className="h-full w-full">
            <source src={"/youtubeVideo/2.mp4"} type="video/mp4" />
          </video>
        </div>
    
      </section>

      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <DynamicSectionTitle title="Các dự án tiêu biểu" />
        <DynamicNews />
      </section> */}
      {/* <section id="gioithieu" className="min-h-screen">
        TEST
      </section> */}
    </main>
  );
}
