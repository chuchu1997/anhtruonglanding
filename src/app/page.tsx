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
const DynamicCarouselSubBanner = dynamic(() => import("@/components/CarouselDisplay2Items"));

const DynamicSectionWrapper = dynamic(() => import("@/components/Section"));

const DynamicGridLayout = dynamic(() => import("@/components/GridLayout"));

const DynamicProduct = dynamic(() => import("@/components/Product"));

const DynamicImageWithPreview = dynamic(() => import("@/components/ImageWithPreview"));

const DynamicDatHang = dynamic(() => import("@/components/DatHang"));
import { data } from "@/data/data";
import CarouselBanner from "@/components/CarouselBanner";
import ThongSoKyThuat from "@/components/ThongSoKyThuat";
import FormTuVan from "@/components/FormTuVan";
import CarouselDisplay3Items from "@/components/CarouselDisplay2Items";
import SectionComponent from "@/components/Section";
import DatHang from "@/components/DatHang";
export default function Home() {
  return (
    <main className="landing-page">
      <section className="main-banner relative rounded-md pt-[80px]">
        <div className="relative">
          <DynamicCarouselBanner listImages={data.listBannerImages}></DynamicCarouselBanner>
        </div>
        <div className="container mx-auto">
          <DynamicCarouselSubBanner images={data.subBannerImages} />

          <DynamicDatHang className="relative left-1/2 -translate-x-1/2 mt-[20px]" />
        </div>
      </section>

      <DynamicSectionWrapper id="chungnhan" className="mt-[15px] lg:mt-[80px]">
        <DynamicSectionTitle title="chứng nhận phân phối" />
        <Image
          src="/bancatgach/chungnhan/1.png"
          alt="giấy chứng nhận phân phối máy cắt gạch panapro"
          // width={300}
          // height={300}

          width={300}
          height={300}
          className="border border-red text-center mx-auto"
        ></Image>
      </DynamicSectionWrapper>

      <DynamicSectionWrapper id="sanphamnoibat" className="mt-[40px]">
        <DynamicSectionTitle title="sản phẩm nổi bật" />
        <div className="pc-version hidden sm:block">
          <DynamicGridLayout>
            {data.sanphamnoibatItems.map((item, index) => (
              <DynamicProduct key={index} title={item.title} imageSrc={item.imageSrc} linkHref={item.href}></DynamicProduct>
            ))}
          </DynamicGridLayout>
        </div>

        <div className="mobile-version block sm:hidden">
          <DynamicCarouselProducts listProduct={data.sanphamnoibatItems}></DynamicCarouselProducts>
        </div>
      </DynamicSectionWrapper>

      {/* <div className="container mx-auto">
        <CarouselDisplay3Items></CarouselDisplay3Items>
      </div> */}
      {/* <DynamicSectionWrapper id="sanphamchudao">
        <DynamicSectionTitle title="sản phẩm chủ đạo" />
        <DynamicGridLayout>
          {data.demchongvacaucangItems.map((item, index) => (
            <DynamicProduct key={index} title={item.title} imageSrc={item.imageSrc} linkHref={item.href}></DynamicProduct>
          ))}
        </DynamicGridLayout>

      </DynamicSectionWrapper> */}

      <DynamicSectionWrapper id="videobancatgach">
        <DynamicSectionTitle title="Video bàn cắt gạch" />

        <div className="my-[20px] text-[15px] text-black/80">
          <h1 className="font-semibold text-[18px]">Bàn Cắt Gạch Chất Lượng Cao - Giải Pháp Tốt Nhất Cho Công Trình Của Bạn</h1>
          <p>
            Bàn cắt gạch <strong>PanaPro</strong> là loại bàn cắt gạch chất lượng cao với giá cả cạnh tranh. Với nhiều năm kinh nghiệm trong ngành,
            chúng tôi cam kết mang đến sản phẩm đáp ứng mọi nhu cầu cắt gạch của bạn.
          </p>
          {/* <span className="font-semibold text-[16px]"> Bàn cắt gạch PANAPRO </span>
          là loại bàn cắt gạch bằng tay , giúp bạn cắt gạch men , gạch lát , gạch nền cực nhanh chỉ sau vài phút , đường cắt cực chuẩn và mịn đẹp .Bàn
          cắt gạch PANOPRO có độ dày cắt tối đa 14mm , có thể cắt theo đường thẳng , đường chéo tùy theo mục đích sử dụng của người sử dụng . */}
        </div>
        <div className="video-review">
          <video controls muted autoPlay className="w-full ">
            <source src={"/videobancatgach/1.mp4"} type="video/mp4" />
          </video>
        </div>
      </DynamicSectionWrapper>

      <section className="main-banner  relative rounded-md overflow-hidden">
        <DynamicSectionTitle title="sản phẩm chủ đạo" />

        <DynamicCarouselBanner listImages={data.listSanPhamChuDaoImages}></DynamicCarouselBanner>
      </section>
      <section className="container mx-auto mt-[20px]" id="bancatgachpanapro">
        <DynamicSectionTitle title="bàn cắt gạch panapro (có đệm)" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[40px]">
          <div className="left-content ">
            <div className="image-preview-main rounded-md relative w-full">
              {/* <Image alt="Giá líp cắt gạch" src={"/bancatgach/sanphamchudao/7.png"} fill className="object-cover" quality={90} priority></Image> */}
              <DynamicImageWithPreview listImages={data.previewOneImages} />
            </div>
          </div>
          <div className="right-content">
            <div className="text-[14px]">
              <span className="font-semibold text-[15px]"> Bàn cắt gạch PANAPRO </span>
              là loại bàn cắt gạch bằng tay , giúp bạn cắt gạch men , gạch lát , gạch nền cực nhanh chỉ sau vài phút , đường cắt cực chuẩn và mịn đẹp
              .Bàn cắt gạch PANOPRO có độ dày cắt tối đa 14mm , có thể cắt theo đường thẳng , đường chéo tùy theo mục đích sử dụng của người sử dụng .
            </div>

            <div className="mt-[20px] congdung">
              <h2 className="font-semibold text-[15px]">Công dụng</h2>
              <ul className="list-decimal ml-4 text-[14px]">
                <li>Đệm cao su tiêu chuẩn Japan</li>
                <li>Bàn cắt gạch nhôm nguyên khối cao cấp</li>
                <li>Tiêu chuẩn Japan</li>
                <li>Chuyên dụng: Gạch men – Gạch bóng kiếng – Gạch xương cá – Gạch bông – Gạch granite – Gạch ceramic – Gạch giả gỗ</li>
              </ul>
            </div>

            <div className="mt-[20px] uudiem ">
              <h2 className="font-semibold text-[15px]">Ưu điểm</h2>
              <ul className="list-decimal ml-4 text-[14px]">
                <li>Đệm cao su nguyên khối khi đặt gạch không bị trơn trượt</li>
                <li>Cụm trợ lực để tách gạch dày dặn giúp giữ chắc chắn 2 cần trợ lực</li>
                <li>Thước đo kèm theo máy </li>
                <li>3 lưỡi dao cắt có thể cắt thằng , chéo tùy ý nhu cầu người sử dụng</li>
              </ul>
            </div>

            <DynamicShapeSale saleOff={10} price={2199000}></DynamicShapeSale>

            <DynamicDatHang />
          </div>
        </div>
        <div className="pc-version hidden sm:block">
          <DynamicGridLayout>
            {data.bancatgachpanaprocodem.map((item, index) => (
              <DynamicProduct key={index} title={item.title} imageSrc={item.imageSrc} linkHref={item.href}></DynamicProduct>
            ))}
          </DynamicGridLayout>
        </div>

        <div className="mobile-version block sm:hidden">
          <DynamicCarouselProducts listProduct={data.bancatgachpanaprocodem}></DynamicCarouselProducts>
        </div>
      </section>

      <section className="container mx-auto mt-[20px]">
        <DynamicSectionTitle title="bàn cắt gạch panapro (không đệm)" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[40px]">
          <div className="left-content ">
            <div className="image-preview-main rounded-md relative w-full">
              {/* <Image alt="Giá líp cắt gạch" src={"/bancatgach/sanphamchudao/7.png"} fill className="object-cover" quality={90} priority></Image> */}
              <DynamicImageWithPreview listImages={data.previewTwoImages} />
            </div>
          </div>
          <div className="right-content">
            <div className="text-[14px]">
              <span className="font-semibold text-[15px]"> Bàn cắt gạch PANAPRO </span>
              là loại bàn cắt gạch bằng tay , giúp bạn cắt gạch men , gạch lát , gạch nền cực nhanh chỉ sau vài phút , đường cắt cực chuẩn và mịn đẹp
              .Bàn cắt gạch PANOPRO có độ dày cắt tối đa 14mm , có thể cắt theo đường thẳng , đường chéo tùy theo mục đích sử dụng của người sử dụng .
            </div>

            <div className="mt-[20px] congdung">
              <h2 className="font-semibold text-[15px]">Công dụng</h2>
              <ul className="list-decimal ml-4 text-[14px]">
                <li>Đệm cao su tiêu chuẩn Japan</li>
                <li>Bàn cắt gạch nhôm nguyên khối cao cấp</li>
                <li>Tiêu chuẩn Japan</li>
                <li>Chuyên dụng: Gạch men – Gạch bóng kiếng – Gạch xương cá – Gạch bông – Gạch granite – Gạch ceramic – Gạch giả gỗ</li>
              </ul>
            </div>

            <div className="mt-[20px] uudiem ">
              <h2 className="font-semibold text-[15px]">Ưu điểm</h2>
              <ul className="list-decimal ml-4 text-[14px]">
                <li>2 đầu máy có chân đế thép nguyên khối , cứng cáp hơn nhiều sản phẩm cùng công dụng ngoài thị trường</li>

                <li>Cụm trợ lực để tách gạch dày dặn giúp giữ chắc chắn 2 cần trợ lực</li>
                <li>2 thanh trượt bằng thép đặc 100% giúp giữ dao cắt gạch chắc chắn khi cắt.</li>
                <li>Thước đo kèm theo máy </li>
                <li>3 lưỡi dao cắt có thể cắt thằng , chéo tùy ý nhu cầu người sử dụng</li>
              </ul>
            </div>

            <DynamicShapeSale saleOff={10} price={1999999}></DynamicShapeSale>
            <DynamicDatHang />
          </div>
        </div>
        <div className="pc-version hidden sm:block">
          <DynamicGridLayout>
            {data.bancatgachpanaprokhongdem.map((item, index) => (
              <DynamicProduct key={index} title={item.title} imageSrc={item.imageSrc} linkHref={item.href}></DynamicProduct>
            ))}
          </DynamicGridLayout>
        </div>

        <div className="mobile-version block sm:hidden">
          <DynamicCarouselProducts listProduct={data.bancatgachpanaprokhongdem}></DynamicCarouselProducts>
        </div>
      </section>
      {/* 
      <section className="bg-[#E7EFFE] py-8" id="thongsokythuat">
        <section className="container mx-auto relative">
          <DynamicSectionTitle title="Thông Số Kỹ Thuật " />
          <ThongSoKyThuat />
          <div className="wrapper-image absolute md:top-[605px] lg:top-[650px] left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[350px] h-[350px]  md:w-[350px]  md:h-[400px]  mt-[10px]  ">
            <Image
              src="/bancatgach/bancatgachwithoutbackground.png"
              fill
              alt="bancatgachdemcaosu"
              style={{ objectFit: "contain" }}
              quality={60}
              priority
              sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,33vw"
            ></Image>
          </div>
        </section>
      </section> */}

      <DynamicSectionWrapper id="bancatgachryobipro">
        <DynamicSectionTitle title="bàn cắt gạch ryobipro" />
        <div className="pc-version hidden sm:block">
          <DynamicGridLayout>
            {data.bancatgachryobipro.map((item, index) => (
              <DynamicProduct key={index} title={item.title} imageSrc={item.imageSrc} linkHref={item.href}></DynamicProduct>
            ))}
          </DynamicGridLayout>
        </div>

        <div className="mobile-version block sm:hidden">
          <DynamicCarouselProducts listProduct={data.bancatgachryobipro}></DynamicCarouselProducts>
        </div>
      </DynamicSectionWrapper>
      <DynamicSectionWrapper id="phukienbancatgach">
        <DynamicSectionTitle title="phụ kiện bàn cắt gạch" />
        <div className="pc-version hidden sm:block">
          <DynamicGridLayout>
            {data.phukienbancatgach.map((item, index) => (
              <DynamicProduct key={index} title={item.title} imageSrc={item.imageSrc} linkHref={item.href}></DynamicProduct>
            ))}
          </DynamicGridLayout>
        </div>

        <div className="mobile-version block sm:hidden">
          <DynamicCarouselProducts listProduct={data.phukienbancatgach}></DynamicCarouselProducts>
        </div>
      </DynamicSectionWrapper>

      <DynamicSectionWrapper id="phukienoplatgach">
        <DynamicSectionTitle title="phụ kiện ốp lát gạch" />
        <div className="pc-version hidden sm:block">
          <DynamicGridLayout>
            {data.phukienoplatgach.map((item, index) => (
              <DynamicProduct key={index} title={item.title} imageSrc={item.imageSrc} linkHref={item.href}></DynamicProduct>
            ))}
          </DynamicGridLayout>
        </div>

        <div className="mobile-version block sm:hidden">
          <DynamicCarouselProducts listProduct={data.phukienoplatgach}></DynamicCarouselProducts>
        </div>
      </DynamicSectionWrapper>

      <DynamicSectionWrapper id="maytialaser">
        <DynamicSectionTitle title="máy tia laser" />
        <div className="pc-version hidden sm:block">
          <DynamicGridLayout>
            {data.maycanbanglaser.map((item, index) => (
              <DynamicProduct key={index} title={item.title} imageSrc={item.imageSrc} linkHref={item.href}></DynamicProduct>
            ))}
          </DynamicGridLayout>
        </div>

        <div className="mobile-version block sm:hidden">
          <DynamicCarouselProducts listProduct={data.maycanbanglaser}></DynamicCarouselProducts>
        </div>
      </DynamicSectionWrapper>

      <DynamicSectionWrapper id="dungcucamtaypin">
        <DynamicSectionTitle title="dụng cụ cầm tay pin" />
        <div className="pc-version hidden sm:block">
          <DynamicGridLayout>
            {data.dungcucamtaypin.map((item, index) => (
              <DynamicProduct key={index} title={item.title} imageSrc={item.imageSrc} linkHref={item.href}></DynamicProduct>
            ))}
          </DynamicGridLayout>
        </div>

        <div className="mobile-version block sm:hidden">
          <DynamicCarouselProducts listProduct={data.dungcucamtaypin}></DynamicCarouselProducts>
        </div>
      </DynamicSectionWrapper>
    </main>
  );
}
