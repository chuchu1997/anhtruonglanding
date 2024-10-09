import dynamic from "next/dynamic";

const DynamicSectionWrapper = dynamic(() => import("@/components/Section"), {});

import { data } from "@/data/data";
import CarouselBanner from "@/components/CarouselBanner";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductComponent from "@/components/Product";
import Link from "next/link";
import CarouselForProductsMobile from "@/components/CarouselForProductsMobile";
import { ProductProps } from "@/interfaces";

export default function Home() {
  const products: ProductProps[] = [
    {
      title: "cà chua s",
      linkHref: "#",
      imageSrc: "/landingpage1source/section1/subicon1.png",
    },
    {
      title: "cà chua1",
      linkHref: "#",
      imageSrc: "/landingpage1source/section1/subicon1.png",
    },
    {
      title: "cà chua",
      linkHref: "#",
      imageSrc: "/landingpage1source/section1/subicon1.png",
    },
    {
      title: "cà chua",
      linkHref: "#",
      imageSrc: "/landingpage1source/section1/subicon1.png",
    },
  ];
  return (
    <div className="page-container">
      <main className="main">
        {/* <section className="hero-section relative "> */}
        <CarouselBanner listImages={data.banner} className="h-[400px] md:h-[800px] pt-[80px]" />
        {/* </section> */}
        <DynamicSectionWrapper titleSection="chứng nhận phân phối" className="bg-[white] ">
          <div className="h-[350px] md:h-[600px] relative">
            <Image alt="section_1_images" src="/bancatgach/chungnhan/1.png" quality={100} priority className="object-contain" fill></Image>
          </div>
        </DynamicSectionWrapper>

        <DynamicSectionWrapper titleSection="sản phẩm chủ đạo">
          <div className="pc-view hidden md:block">
            <div className="grid mx-auto w-4/6 md:w-full  md:grid-cols-3 lg:grid-cols-4 gap-8">
              {data.productNoibat.map((product, index) => (
                <ProductComponent key={index} title={product.title} linkHref={product.linkHref} imageSrc={product.imageSrc} />
              ))}
            </div>
          </div>
          <div className="mobile-view block md:hidden">
            <CarouselForProductsMobile products={data.productNoibat} />
          </div>
        </DynamicSectionWrapper>
        {/* 
        <DynamicSectionWrapper titleSection="sản phẩm chủ đạo">
          <Tabs defaultValue="account">
            <div className="  flex justify-center item-center py-4">
              <TabsList className="bg-transparent">
                <TabsTrigger value="account" className="font-cuprum ">
                  This is item 1
                </TabsTrigger>
                <TabsTrigger value="password" className="font-cuprum">
                  This is item 2
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="account">
              <div className="pc-view hidden md:block">
                <div className="grid mx-auto w-4/6 md:w-full  md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {products.map((product, index) => (
                    <ProductComponent key={index} title={product.title} linkHref={product.linkHref} imageSrc={product.imageSrc} />
                  ))}
                </div>
              </div>
              <div className="mobile-view block md:hidden">
                <CarouselForProductsMobile products={products} />
              </div>
            </TabsContent>
            <TabsContent value="password">
              <div className="pc-view hidden md:block">
                <div className="grid mx-auto w-4/6 md:w-full  md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {products.map((product, index) => (
                    <ProductComponent key={index} title={product.title} linkHref={product.linkHref} imageSrc={product.imageSrc} />
                  ))}
                </div>
              </div>
              <div className="mobile-view block md:hidden">
                <CarouselForProductsMobile products={products} />
              </div>
            </TabsContent>
          </Tabs>
        </DynamicSectionWrapper> */}

        <DynamicSectionWrapper titleSection="sản phẩm nổi bật" className=" bg-[#fbfbfb]">
          <div className="grid md:grid-cols-3 gap-8 font-cuprum">
            <div className="col-span-2">
              <div className="h-[350px] md:h-[450px] relative">
                <Image
                  alt="section_1_images"
                  src="/landingpage1source/section1/subicon2.png"
                  quality={100}
                  priority
                  className="object-contain"
                  fill
                ></Image>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {/* <div>123</div> */}
              <h3 className="text-[24px] md:text-[30px]  font-bold uppercase">Mùng tơi</h3>
              <p className="text-[16px] md:text-[18px] font-extralight	text-[#595959]">
                Rau cải bắp hữu cơ (Brassica oleracea nhóm Capitata) là loại rau chủ lực trong họ Cải (còn gọi là họ Thập tự -
                Brassicaceae/Cruciferae),có xuất xứ từ vùng Địa Trung Hải. Nó là cây thân thảo, sống hai năm, và là một thực vật có hoa thuộc nhóm hai
                lá mầm với các lá tạo thành một cụm đặc hình gần như hình cầu.Là một loại rau hữu cơ rất dễ nhận biết,khó có thể nhầm lẫn
              </p>
              <Link href="/" className="px-2 py-1 w-[100px] text-center rounded-lg text-white bg-[#86be4c]">
                Xem chi tiết
              </Link>
            </div>
          </div>
        </DynamicSectionWrapper>

        <section className="">
          <CarouselBanner listImages={data.banner} className="h-[300px] md:h-[500px]" />
        </section>
      </main>
    </div>
  );
}
