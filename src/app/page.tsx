import dynamic from "next/dynamic";

import { data } from "@/data/data";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Link from "next/link";
const DynamicSectionWrapper = dynamic(() => import("@/components/Section"), {});

const DynamicShapeSale = dynamic(() => import("@/components/ShapeSale"));
const DynamicCarouselBanner = dynamic(() => import("@/components/CarouselBanner"));

import Product from "@/components/Product";
const DynamicCarouselProductMobile = dynamic(() => import("@/components/CarouselForProductsMobile"));
export default function Home() {
  return (
    <div className="page-container">
      <main className="main">
        {/* <section className="hero-section relative "> */}
        <DynamicCarouselBanner listImages={data.banner} className="h-[400px] md:h-[800px] pt-[80px]" />
        {/* </section> */}
        <DynamicSectionWrapper titleSection="chứng nhận phân phối" className="bg-[white] ">
          <div className="h-[350px] md:h-[600px] relative">
            <Image
              alt="section_1_images"
              src="/bancatgach/chungnhan/1.png"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              priority
              className="object-contain"
              fill
            ></Image>
          </div>
        </DynamicSectionWrapper>

        <DynamicSectionWrapper titleSection="video bàn cắt gạch" className="bg-[#fbfbfb] ">
          <h3 className="text-[14px] md:text-[16px]">
            <strong>Bàn cắt gạch PANAPRO </strong>
            là loại bàn cắt gạch bằng tay , giúp bạn cắt gạch men , gạch lát , gạch nền cực nhanh chỉ sau vài phút , đường cắt cực chuẩn và mịn đẹp
            .Bàn cắt gạch PANOPRO có độ dày cắt tối đa 14mm , có thể cắt theo đường thẳng , đường chéo tùy theo mục đích sử dụng của người sử dụng .
          </h3>
          <div className="video-review mt-[30px]">
            <video controls muted autoPlay className="w-full ">
              <source src={"/videobancatgach/1.mp4"} type="video/mp4" />
            </video>
          </div>
        </DynamicSectionWrapper>

        <DynamicSectionWrapper titleSection="sản phẩm chủ đạo" isFullWidth={true}>
          <DynamicCarouselBanner listImages={data.listSanPhamChuDaoImages} className="h-[250px] md:h-[650px]" />
        </DynamicSectionWrapper>

        <DynamicSectionWrapper titleSection="bàn cắt gạch panapro (có đệm)" className=" bg-[#fbfbfb]">
          <div className="grid md:grid-cols-2 gap-10 font-cuprum">
            <div className="">
              <div className="h-[350px] md:h-full relative">
                <Image
                  alt="section_1_images"
                  src="/bancatgach/preview1/11.jpg"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center"
                  fill
                ></Image>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-[16px] md:text-[18px] font-extralight	">
              {/* <div>123</div> */}
              <h3 className="text-[24px] md:text-[30px]  font-bold uppercase">Bàn cắt gạch PANAPRO (có đệm)</h3>

              <p className="text-[#595959]">
                là loại bàn cắt gạch bằng tay , giúp bạn cắt gạch men , gạch lát , gạch nền cực nhanh chỉ sau vài phút , đường cắt cực chuẩn và mịn
                đẹp .Bàn cắt gạch PANOPRO có độ dày cắt tối đa 14mm , có thể cắt theo đường thẳng , đường chéo tùy theo mục đích sử dụng của người sử
                dụng .
              </p>

              <ul className="text-[#595959]">
                <strong className="text-[#000000] font-bold">Công dụng:</strong>
                <li>- Đệm cao su nguyên khối khi đặt gạch không bị trơn trượt</li>
                <li>- Cụm trợ lực để tách gạch dày dặn giúp giữ chắc chắn 2 cần trợ lực</li>
                <li>- Thước đo kèm theo máy</li>
                <li>- 3 lưỡi dao cắt có thể cắt thằng , chéo tùy ý nhu cầu người sử dụng</li>
              </ul>

              <DynamicShapeSale saleOff={10} price={2199000}></DynamicShapeSale>

              <Link href="https://zalo.me/0973926139" className="px-2 py-1 w-2/5 text-center rounded-lg text-white bg-[#86be4c]">
                Đặt hàng ngay
              </Link>
            </div>
          </div>
        </DynamicSectionWrapper>

        <DynamicSectionWrapper titleSection="bàn cắt gạch panapro (không đệm)" className=" bg-white">
          <div className="grid md:grid-cols-2 gap-10 font-cuprum">
            <div className="flex flex-col gap-2 text-[16px] md:text-[18px] font-extralight	">
              {/* <div>123</div> */}
              <h3 className="text-[24px] md:text-[30px]  font-bold uppercase">Bàn cắt gạch PANAPRO (không đệm)</h3>

              <p className="text-[#595959]">
                là loại bàn cắt gạch bằng tay , giúp bạn cắt gạch men , gạch lát , gạch nền cực nhanh chỉ sau vài phút , đường cắt cực chuẩn và mịn
                đẹp .Bàn cắt gạch PANOPRO có độ dày cắt tối đa 14mm , có thể cắt theo đường thẳng , đường chéo tùy theo mục đích sử dụng của người sử
                dụng .
              </p>

              <ul className="text-[#595959]">
                <strong className="text-[#000000] font-bold">Công dụng:</strong>
                <li>- Đệm cao su nguyên khối khi đặt gạch không bị trơn trượt</li>
                <li>- Cụm trợ lực để tách gạch dày dặn giúp giữ chắc chắn 2 cần trợ lực</li>
                <li>- Thước đo kèm theo máy</li>
                <li>- 3 lưỡi dao cắt có thể cắt thằng , chéo tùy ý nhu cầu người sử dụng</li>
              </ul>

              <DynamicShapeSale saleOff={10} price={1999999}></DynamicShapeSale>

              <Link href="https://zalo.me/0973926139" className="px-2 py-1 w-2/5 text-center rounded-lg text-white bg-[#86be4c]">
                Đặt hàng ngay
              </Link>
            </div>
            <div className="">
              <div className="h-[350px] md:h-full relative">
                <Image
                  alt="section_1_images"
                  src="/bancatgach/preview1/33.jpg"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center"
                  fill
                ></Image>
              </div>
            </div>
          </div>
        </DynamicSectionWrapper>

        <DynamicSectionWrapper titleSection="Bàn cắt gạch" className="bg-[#fbfbfb]" id="bancatgach">
          <Tabs defaultValue="panapro-codem">
            <div className="flex  justify-center item-center py-4">
              <TabsList className="bg-transparent  flex flex-col md:flex-row items-start mb-[10px]  md:mb-0">
                <TabsTrigger value="panapro-codem" className="font-cuprum ">
                  Bàn cắt gạch Pana Pro (Có đệm)
                </TabsTrigger>
                <TabsTrigger value="panapro-khongdem" className="font-cuprum ">
                  Bàn cắt gạch Pana Pro (Không đệm)
                </TabsTrigger>
                <TabsTrigger value="ryobi" className="font-cuprum">
                  Bàn cắt gạch Ryobi Pro
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="panapro-codem">
              <div className="pc-view hidden md:block">
                <div className="grid mx-auto w-4/6 md:w-full  md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {data.productPanaprocodem.map((product, index) => (
                    <Product key={index} title={product.title} linkHref={product.linkHref} imageSrc={product.imageSrc} />
                  ))}
                </div>
              </div>
              <div className="mobile-view block md:hidden">
                <DynamicCarouselProductMobile products={data.productPanaprocodem} />
              </div>
            </TabsContent>
            <TabsContent value="panapro-khongdem">
              <div className="pc-view hidden md:block">
                <div className="grid mx-auto w-4/6 md:w-full  md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {data.productPanaprokhongdem.map((product, index) => (
                    <Product key={index} title={product.title} linkHref={product.linkHref} imageSrc={product.imageSrc} />
                  ))}
                </div>
              </div>
              <div className="mobile-view block md:hidden">
                <DynamicCarouselProductMobile products={data.productPanaprokhongdem} />
              </div>
            </TabsContent>
            <TabsContent value="ryobi">
              <div className="pc-view hidden md:block">
                <div className="grid mx-auto w-4/6 md:w-full  md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {data.productRioby.map((product, index) => (
                    <Product key={index} title={product.title} linkHref={product.linkHref} imageSrc={product.imageSrc} />
                  ))}
                </div>
              </div>
              <div className="mobile-view block md:hidden">
                <DynamicCarouselProductMobile products={data.productRioby} />
              </div>
            </TabsContent>
          </Tabs>
        </DynamicSectionWrapper>

        <DynamicSectionWrapper titleSection="Các sản phẩm khác" id="cacsanphamkhac">
          <Tabs defaultValue="phukiencatgach">
            <div className="flex  justify-center item-center py-4">
              <TabsList className="bg-transparent  flex flex-col md:flex-row items-start mb-[40px] md:mb-0">
                <TabsTrigger value="phukiencatgach" className="font-cuprum ">
                  Phụ kiện bàn cắt gạch
                </TabsTrigger>
                <TabsTrigger value="phukienopgach" className="font-cuprum ">
                  Phụ kiện ốp lát gạch
                </TabsTrigger>
                <TabsTrigger value="maytialaser" className="font-cuprum">
                  Máy tia laser
                </TabsTrigger>
                <TabsTrigger value="dungcucamtaypin" className="font-cuprum">
                  Dụng cụ cầm tay pin
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="phukiencatgach">
              <div className="pc-view hidden md:block">
                <div className="grid mx-auto w-4/6 md:w-full  md:grid-cols-3  gap-8">
                  {data.phukienbancatgach.map((product, index) => (
                    <Product key={index} title={product.title} linkHref={product.linkHref} imageSrc={product.imageSrc} />
                  ))}
                </div>
              </div>
              <div className="mobile-view block md:hidden">
                <DynamicCarouselProductMobile products={data.phukienbancatgach} />
              </div>
            </TabsContent>
            <TabsContent value="phukienopgach">
              <div className="pc-view hidden md:block">
                <div className="grid mx-auto w-4/6 md:w-full  md:grid-cols-3  gap-8">
                  {data.phukienoplatgach.map((product, index) => (
                    <Product key={index} title={product.title} linkHref={product.linkHref} imageSrc={product.imageSrc} />
                  ))}
                </div>
              </div>
              <div className="mobile-view block md:hidden">
                <DynamicCarouselProductMobile products={data.phukienoplatgach} />
              </div>
            </TabsContent>
            <TabsContent value="maytialaser">
              <div className="pc-view hidden md:block">
                <div className="grid mx-auto w-4/6 md:w-full  md:grid-cols-3  gap-8">
                  {data.maycanbanglaser.map((product, index) => (
                    <Product key={index} title={product.title} linkHref={product.linkHref} imageSrc={product.imageSrc} />
                  ))}
                </div>
              </div>
              <div className="mobile-view block md:hidden">
                <DynamicCarouselProductMobile products={data.maycanbanglaser} />
              </div>
            </TabsContent>
            <TabsContent value="dungcucamtaypin">
              <div className="pc-view hidden md:block">
                <div className="grid mx-auto w-4/6 md:w-full  md:grid-cols-3  gap-8">
                  {data.dungcucamtaypin.map((product, index) => (
                    <Product key={index} title={product.title} linkHref={product.linkHref} imageSrc={product.imageSrc} />
                  ))}
                </div>
              </div>
              <div className="mobile-view block md:hidden">
                <DynamicCarouselProductMobile products={data.dungcucamtaypin} />
              </div>
            </TabsContent>
          </Tabs>
        </DynamicSectionWrapper>
      </main>
    </div>
  );
}
