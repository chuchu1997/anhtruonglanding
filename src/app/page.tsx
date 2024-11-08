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
import { Check } from "react-feather";
import { Button } from "@/components/ui/button";
import CarouselProducts from "@/components/CarouselProducts";
import CarouselDisplay2Items from "@/components/CarouselDisplay2Items";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

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
        <CarouselBanner listImages={data.banner} className="h-[300px] md:h-[700px]" />
        {/* </section> */}
        <DynamicSectionWrapper className="container">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-4 relative">
            <div className="left-content relative h-[420px] md:h-[600px] w-full">
              <Image
                alt="experience"
                fill
                objectFit="contain"
                src="https://nhathuymachine.com.vn/wp-content/uploads/2024/10/Nhat-Huy-1-1.jpg"
              ></Image>
            </div>
            <div className="right-content flex flex-col gap-8 ">
              <h2 className=" capitalize text-[20px] text-[#a50000] font-bold inline-block overflow-hidden ">
                <span className="  relative  after:absolute after:content-[''] after:w-[50px] after:h-[3px] after:bg-[#a50000] after:top-1/2 after:right-[-65px]">
                  Cung cấp giải pháp
                </span>
              </h2>
              <p className=" text-[25px] capitalize">
                <span className="text-[#333333] font-bold ">Giải Pháp Tối Ưu </span>
                <strong className="text-[#a50000] font-bold">Hàng Đầu Cho Ngành </strong>

                <span className="text-[#333333] font-bold"> dược phẩm</span>
              </p>
              <p>
                Trong hành trình xây dựng uy tín, chất lượng là mục tiêu hàng đầu của chúng tôi. Chúng tôi cam kết cung cấp máy móc và giải pháp tối
                ưu nhất cho ngành dược phẩm, đảm bảo hiệu quả và độ chính xác cao.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 items-center">
                    <Check className="text-[#a50000]" />
                    <p>Công nghệ tiên tiến.</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Check className="text-[#a50000]" />
                    <p>Công nghệ tiên tiến.</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Check className="text-[#a50000]" />
                    <p>Công nghệ tiên tiến.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4 items-center">
                    <Check className="text-[#a50000]" />
                    <p>Công nghệ tiên tiến.</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Check className="text-[#a50000]" />
                    <p>Công nghệ tiên tiến.</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Check className="text-[#a50000]" />
                    <p>Công nghệ tiên tiến.</p>
                  </div>
                </div>
                <Button className="mt-[20px]">Xem thêm</Button>
              </div>
            </div>
          </div>
        </DynamicSectionWrapper>
        <section className="bg-[#4f4f4f]">
          <DynamicSectionWrapper className=" mx-[100px] relative ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
              <div className="flex flex-col gap-4">
                <h2 className=" capitalize text-[20px] text-[#a50000] font-bold inline-block overflow-hidden ">
                  <span className="  relative  after:absolute after:content-[''] after:w-[50px] after:h-[3px] after:bg-[#a50000] after:top-1/2 after:right-[-65px]">
                    Chất lượng là
                  </span>
                </h2>
                <h2 className="capitalize text-[25px] max-w-[250px] text-[white] font-bold leading-9">Mục tiêu hàng đầu của chúng tôi</h2>
                <p className="text-white">
                  Trong hành trình xây dựng uy tín, chất lượng là mục tiêu hàng đầu của chúng tôi. Chúng tôi cam kết cung cấp máy móc và giải pháp tối
                  ưu nhất cho ngành dược phẩm, đảm bảo hiệu quả và độ chính xác cao.
                </p>
                <Button className="w-2/6">Liên hệ</Button>
              </div>
              <div className=" overflow-hidden col-span-2 ">
                <Carousel>
                  <CarouselContent className=" w-full  ">
                    <CarouselItem className="relative basis-1/3 mr-4">
                      <div className="h-full w-full bg-white p-4 flex flex-col gap-4">
                        <div>
                          <Image
                            src="https://nhathuymachine.com.vn/wp-content/uploads/2024/09/performance-appraisal.png"
                            alt="img"
                            width={80}
                            height={80}
                            quality={100}
                          ></Image>
                        </div>
                        <div>title</div>
                        <div>description</div>
                        <div className="border-b-2 border-[grey]/40 block"></div>
                        <div className="text-[black] font-bold">Xem thêm</div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="relative basis-1/3 mr-4">
                      <div className="h-full w-full bg-white p-4 flex flex-col gap-4">
                        <div>
                          <Image
                            src="https://nhathuymachine.com.vn/wp-content/uploads/2024/09/performance-appraisal.png"
                            alt="img"
                            width={80}
                            height={80}
                            quality={100}
                          ></Image>
                        </div>
                        <div>title</div>
                        <div>description</div>
                        <div className="border-b-2 border-[grey]/40 block"></div>
                        <div className="text-[black] font-bold">Xem thêm</div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="relative basis-1/3 mr-4">
                      <div className="h-full w-full bg-white p-4 flex flex-col gap-4">
                        <div>
                          <Image
                            src="https://nhathuymachine.com.vn/wp-content/uploads/2024/09/performance-appraisal.png"
                            alt="img"
                            width={80}
                            height={80}
                            quality={100}
                          ></Image>
                        </div>
                        <div>title</div>
                        <div>description</div>
                        <div className="border-b-2 border-[grey]/40 block"></div>
                        <div className="text-[black] font-bold">Xem thêm</div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="relative basis-1/3 mr-4">
                      <div className="h-full w-full bg-white p-4 flex flex-col gap-4">
                        <div>
                          <Image
                            src="https://nhathuymachine.com.vn/wp-content/uploads/2024/09/performance-appraisal.png"
                            alt="img"
                            width={80}
                            height={80}
                            quality={100}
                          ></Image>
                        </div>
                        <div>title</div>
                        <div>description</div>
                        <div className="border-b-2 border-[grey]/40 block"></div>
                        <div className="text-[black] font-bold">Xem thêm</div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </DynamicSectionWrapper>
        </section>
      </main>
    </div>
  );
}
