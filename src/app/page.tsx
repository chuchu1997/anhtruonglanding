import dynamic from "next/dynamic";

const DynamicSectionWrapper = dynamic(() => import("@/components/Section"), {});

import { data } from "@/data/data";
import Image from "next/image";

import Link from "next/link";

import { Check } from "react-feather";
import { Button } from "@/components/ui/button";

import HeadingComponent from "@/components/HeadingComponent";
import CountUpEffect from "@/components/CountUpEffect";
import { Quote } from "lucide-react";
import GridLayout from "@/components/GridLayout";
import CarouselComponent from "@/components/CarouselComponent";

import Loading from "@/components/Loading";

const BannerMaster = dynamic(() => import("@/layoutMasterComponent/bannerMaster"), {
  loading: () => <Loading />, // Show spinner while the widget is loading
  ssr: false, // Disable SSR, load only on client-side
});

export default async function Home() {
  // let data = await fetch("https://api.vercel.app/blog");
  // let posts = await data.json();
  return (
    <div className="page-container">
      <main className="main">
        <BannerMaster />
        <DynamicSectionWrapper className="container">
          <HeadingComponent subTitle="Cung cấp giải pháp" mainTitle="Giải pháp tối ưu hàng đầu cho ngành dược phẩm"></HeadingComponent>

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
          <DynamicSectionWrapper className="container relative ">
            <GridLayout columsDisplay={1} className="gap-4">
              <div className="flex flex-col gap-4 max-w-[500px] ">
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
                <Button className="w-4/6">Liên hệ</Button>
              </div>
              <div className=" overflow-hidden col-span-2">
                <CarouselComponent
                  responsiveTaiwindForItem="md:basis-1/2 lg:basis-1/3"
                  isShowDot
                  listJSXCarouselItem={[
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
                      <div className="absolute right-[10px] text-[#d6d6d6] top-[20px] font-semibold">COUNT</div>
                      <div>title</div>
                      <div>description</div>
                      <div className="border-b-2 border-[grey]/40 block"></div>
                      <div className="text-[black] font-bold">Xem thêm</div>
                    </div>,
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
                      <div className="absolute right-[10px] text-[#d6d6d6] top-[20px] font-semibold">COUNT</div>
                      <div>title</div>
                      <div>description</div>
                      <div className="border-b-2 border-[grey]/40 block"></div>
                      <div className="text-[black] font-bold">Xem thêm</div>
                    </div>,
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
                      <div className="absolute right-[10px] text-[#d6d6d6] top-[20px] font-semibold">COUNT</div>
                      <div>title</div>
                      <div>description</div>
                      <div className="border-b-2 border-[grey]/40 block"></div>
                      <div className="text-[black] font-bold">Xem thêm</div>
                    </div>,
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
                      <div className="absolute right-[10px] text-[#d6d6d6] top-[20px] font-semibold">COUNT</div>
                      <div>title</div>
                      <div>description</div>
                      <div className="border-b-2 border-[grey]/40 block"></div>
                      <div className="text-[black] font-bold">Xem thêm</div>
                    </div>,
                  ]}
                ></CarouselComponent>
                {/* <Carousel>
                  <CarouselContent className=" w-full -ml-4 ">
                    <CarouselItem className="relative md:basis-1/2 lg:basis-1/3 mr-4">
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
                        <div className="absolute right-[10px] text-[#d6d6d6] top-[20px] font-semibold">COUNT</div>
                        <div>title</div>
                        <div>description</div>
                        <div className="border-b-2 border-[grey]/40 block"></div>
                        <div className="text-[black] font-bold">Xem thêm</div>
                      </div>
                    </CarouselItem>
                    <CarouselItem className="relative md:basis-1/2 lg:basis-1/3 mr-4">
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
                    <CarouselItem className="relative md:basis-1/2 lg:basis-1/3 mr-4">
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
                </Carousel> */}
              </div>
            </GridLayout>
          </DynamicSectionWrapper>
        </section>
        <DynamicSectionWrapper className="container ">
          <HeadingComponent subTitle="chất lượng là" mainTitle="Đội ngũ chuyên môn đề xuất đột phá"></HeadingComponent>

          <GridLayout className="gap-4" columsDisplay={2}>
            <div className="image-preview relative h-[450px] md:h-[550px]  w-full">
              <Image
                fill
                className="object-cover md:object-contain"
                src="https://nhathuymachine.com.vn/wp-content/uploads/2024/10/About-Home-2.jpg"
                alt="image-preview"
              ></Image>
            </div>
            <div className="flex flex-col gap-4">
              <p>
                Chúng tôi tự hào có đội ngũ kỹ sư giàu kinh nghiệm và am hiểu sâu rộng về ngành. Chúng tôi luôn tận tâm với từng dự án và cam kết mang
                lại những đề xuất đột phá, nhằm đáp ứng tốt nhất nhu cầu của khách hàng.
              </p>
              <div className="flex gap-4 items-start ">
                <Check className="text-[#a50000]" size={35} />
                <p>
                  <strong>Tính sáng tạo cao: </strong>
                  <span>Nhân viên của chúng tôi luôn tìm kiếm và đề xuất những giải pháp mới mẻ, đáp ứng tốt nhất nhu cầu</span>
                </p>
              </div>
              <div className="flex gap-4 items-start ">
                <Check className="text-[#a50000]" size={35} />
                <p>
                  <strong>Đào tạo liên tục: </strong>
                  <span>Chúng tôi cam kết đầu tư vào đào tạo, giúp nhân viên cập nhật công nghệ và nâng cao kỹ năng.</span>
                </p>
              </div>
              <div className="flex gap-4 items-start ">
                <Check className="text-[#a50000]" size={35} />
                <p>
                  <strong>Đạo đức nghề nghiệp: </strong>
                  <span>Nhân viên của chúng tôi tuân thủ các quy tắc đạo đức, đảm bảo sự minh bạch và tin cậy trong mọi hoạt động.</span>
                </p>
              </div>
            </div>
          </GridLayout>
        </DynamicSectionWrapper>

        <HeadingComponent subTitle="tiên phong trong giải pháp" mainTitle="sản xuất dược phẩm hiện đại"></HeadingComponent>
        <div className="mx-4 ">
          <CarouselComponent
            isShowControlNextAndPrev
            isShowDot
            responsiveTaiwindForItem="md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
            listJSXCarouselItem={[
              <div className=" h-[550px] w-full relative  ">
                <div className="h-4/5 relative">
                  <div className="text-white code-product absolute bottom-0  bg-accent w-[40px] h-[200px] text-center [writing-mode:vertical-lr] z-20 ">
                    THIS IS TEXT
                  </div>
                  <Image
                    src="https://nhathuymachine.com.vn/wp-content/uploads/2024/09/1-2048x1222.jpg"
                    alt="test-image"
                    fill
                    className="object-cover object-center"
                    quality={100}
                  ></Image>
                  <div className="desc"></div>
                </div>
                <div className="h-1/5 bg-[#cccccc] p-4 flex items-start gap-4 item-content">
                  <div className="h-full w-[5px] bg-accent"> </div>
                  <div className="flex flex-col capitalize">
                    <div className=" font-bold text-[20px]">Chày cối dập viên </div>
                    <div className="#4f4f4f">Xem thêm </div>
                  </div>
                </div>
              </div>,
              <div className=" h-[550px] w-full relative  ">
                <div className="h-4/5 relative">
                  <div className="text-white code-product absolute bottom-0  bg-accent w-[40px] h-[200px] text-center [writing-mode:vertical-lr] z-20 ">
                    THIS IS TEXT
                  </div>
                  <Image
                    src="https://nhathuymachine.com.vn/wp-content/uploads/2024/09/1-2048x1222.jpg"
                    alt="test-image"
                    fill
                    className="object-cover object-center"
                    quality={100}
                  ></Image>
                  <div className="desc"></div>
                </div>
                <div className="h-1/5 bg-[#cccccc] p-4 flex items-start gap-4 item-content">
                  <div className="h-full w-[5px] bg-accent"> </div>
                  <div className="flex flex-col capitalize">
                    <div className=" font-bold text-[20px]">Chày cối dập viên </div>
                    <div className="#4f4f4f">Xem thêm </div>
                  </div>
                </div>
              </div>,
              <div className=" h-[550px] w-full relative  ">
                <div className="h-4/5 relative">
                  <div className="text-white code-product absolute bottom-0  bg-accent w-[40px] h-[200px] text-center [writing-mode:vertical-lr] z-20 ">
                    THIS IS TEXT
                  </div>
                  <Image
                    src="https://nhathuymachine.com.vn/wp-content/uploads/2024/09/1-2048x1222.jpg"
                    alt="test-image"
                    fill
                    className="object-cover object-center"
                    quality={100}
                  ></Image>
                  <div className="desc"></div>
                </div>
                <div className="h-1/5 bg-[#cccccc] p-4 flex items-start gap-4 item-content">
                  <div className="h-full w-[5px] bg-accent"> </div>
                  <div className="flex flex-col capitalize">
                    <div className=" font-bold text-[20px]">Chày cối dập viên </div>
                    <div className="#4f4f4f">Xem thêm </div>
                  </div>
                </div>
              </div>,
              <div className=" h-[550px] w-full relative  ">
                <div className="h-4/5 relative">
                  <div className="text-white code-product absolute bottom-0  bg-accent w-[40px] h-[200px] text-center [writing-mode:vertical-lr] z-20 ">
                    THIS IS TEXT
                  </div>
                  <Image
                    src="https://nhathuymachine.com.vn/wp-content/uploads/2024/09/1-2048x1222.jpg"
                    alt="test-image"
                    fill
                    className="object-cover object-center"
                    quality={100}
                  ></Image>
                  <div className="desc"></div>
                </div>
                <div className="h-1/5 bg-[#cccccc] p-4 flex items-start gap-4 item-content">
                  <div className="h-full w-[5px] bg-accent"> </div>
                  <div className="flex flex-col capitalize">
                    <div className=" font-bold text-[20px]">Chày cối dập viên </div>
                    <div className="#4f4f4f">Xem thêm </div>
                  </div>
                </div>
              </div>,
              <div className=" h-[550px] w-full relative  ">
                <div className="h-4/5 relative">
                  <div className="text-white code-product absolute bottom-0  bg-accent w-[40px] h-[200px] text-center [writing-mode:vertical-lr] z-20 ">
                    THIS IS TEXT
                  </div>
                  <Image
                    src="https://nhathuymachine.com.vn/wp-content/uploads/2024/09/1-2048x1222.jpg"
                    alt="test-image"
                    fill
                    className="object-cover object-center"
                    quality={100}
                  ></Image>
                  <div className="desc"></div>
                </div>
                <div className="h-1/5 bg-[#cccccc] p-4 flex items-start gap-4 item-content">
                  <div className="h-full w-[5px] bg-accent"> </div>
                  <div className="flex flex-col capitalize">
                    <div className=" font-bold text-[20px]">Chày cối dập viên </div>
                    <div className="#4f4f4f">Xem thêm </div>
                  </div>
                </div>
              </div>,
              <div className=" h-[550px] w-full relative  ">
                <div className="h-4/5 relative">
                  <div className="text-white code-product absolute bottom-0  bg-accent w-[40px] h-[200px] text-center [writing-mode:vertical-lr] z-20 ">
                    THIS IS TEXT
                  </div>
                  <Image
                    src="https://nhathuymachine.com.vn/wp-content/uploads/2024/09/1-2048x1222.jpg"
                    alt="test-image"
                    fill
                    className="object-cover object-center"
                    quality={100}
                  ></Image>
                  <div className="desc"></div>
                </div>
                <div className="h-1/5 bg-[#cccccc] p-4 flex items-start gap-4 item-content">
                  <div className="h-full w-[5px] bg-accent"> </div>
                  <div className="flex flex-col capitalize">
                    <div className=" font-bold text-[20px]">Chày cối dập viên </div>
                    <div className="#4f4f4f">Xem thêm </div>
                  </div>
                </div>
              </div>,
              <div className=" h-[550px] w-full relative  ">
                <div className="h-4/5 relative">
                  <div className="text-white code-product absolute bottom-0  bg-accent w-[40px] h-[200px] text-center [writing-mode:vertical-lr] z-20 ">
                    THIS IS TEXT
                  </div>
                  <Image
                    src="https://nhathuymachine.com.vn/wp-content/uploads/2024/09/1-2048x1222.jpg"
                    alt="test-image"
                    fill
                    className="object-cover object-center"
                    quality={100}
                  ></Image>
                  <div className="desc"></div>
                </div>
                <div className="h-1/5 bg-[#cccccc] p-4 flex items-start gap-4 item-content">
                  <div className="h-full w-[5px] bg-accent"> </div>
                  <div className="flex flex-col capitalize">
                    <div className=" font-bold text-[20px]">Chày cối dập viên </div>
                    <div className="#4f4f4f">Xem thêm </div>
                  </div>
                </div>
              </div>,
            ]}
          ></CarouselComponent>
        </div>
        <DynamicSectionWrapper className=" ">
          <HeadingComponent subTitle="với chúng tôi" mainTitle="Khách hàng là trung tâm của mọi nỗ lực và cam kết"></HeadingComponent>
          <div className="relative h-[450px]">
            <Image
              src="https://nhathuymachine.com.vn/wp-content/uploads/2024/10/Number-bg.jpg?id=795"
              alt="image-test"
              fill
              className="object-cover object-center"
              quality={100}
            ></Image>
            <div className="text-white relative container top-1/2 transform  -translate-y-1/2 flex flex-col gap-4 md:flex-row justify-between items-center">
              <CountUpEffect />
            </div>
          </div>

          <GridLayout className="relative w-full top-[0px] lg:top-[-140px]  items-center gap-4 md:container container-none" columsDisplay={2}>
            <div className="shape-1 bg-accent p-4 text-white">
              <strong>Quý Đối Tác Là Tài Sản</strong>
              <p>
                Quý giá nhất trong hành trình phát triển, là nguồn động lực thúc đẩy chúng tôi không ngừng đổi mới và nâng cao chất lượng sản phẩm,
                dịch vụ.
              </p>
            </div>
            <div className="shape-2  flex items-start gap-4 ">
              <div className="w-[6px] h-[90px]  bg-accent"></div>
              <Quote size={50} className="text-dark lg:text-white" />
              <div className="text-dark lg:text-white">
                Chúng tôi luôn trân trọng sự tin tưởng và đồng hành của Quý đối tác trong suốt chặng đường phát triển.
              </div>
            </div>
          </GridLayout>
        </DynamicSectionWrapper>
        <DynamicSectionWrapper className="container">
          <CarouselComponent
            isShowDot
            responsiveTaiwindForItem="md:basis-1/3   lg:basis-1/4 "
            listJSXCarouselItem={[
              <div className="relative h-[150px] bg-white shadow-md m-4">
                <Image src="https://nhathuymachine.com.vn/wp-content/uploads/2024/10/7.png" alt="ss" fill className="object-contain"></Image>
              </div>,
              <div className="relative h-[150px] bg-white shadow-md m-4">
                <Image src="https://nhathuymachine.com.vn/wp-content/uploads/2024/10/7.png" alt="ss" fill className="object-contain"></Image>
              </div>,
              <div className="relative h-[150px] bg-white shadow-md m-4">
                <Image src="https://nhathuymachine.com.vn/wp-content/uploads/2024/10/7.png" alt="ss" fill className="object-contain"></Image>
              </div>,
              <div className="relative h-[150px] bg-white shadow-md m-4">
                <Image src="https://nhathuymachine.com.vn/wp-content/uploads/2024/10/7.png" alt="ss" fill className="object-contain"></Image>
              </div>,
              <div className="relative h-[150px] bg-white shadow-md m-4">
                <Image src="https://nhathuymachine.com.vn/wp-content/uploads/2024/10/7.png" alt="ss" fill className="object-contain"></Image>
              </div>,
              <div className="relative h-[150px] bg-white shadow-md m-4">
                <Image src="https://nhathuymachine.com.vn/wp-content/uploads/2024/10/7.png" alt="ss" fill className="object-contain"></Image>
              </div>,
              <div className="relative h-[150px] bg-white shadow-md m-4">
                <Image src="https://nhathuymachine.com.vn/wp-content/uploads/2024/10/7.png" alt="ss" fill className="object-contain"></Image>
              </div>,
              <div className="relative h-[150px] bg-white shadow-md m-4">
                <Image src="https://nhathuymachine.com.vn/wp-content/uploads/2024/10/7.png" alt="ss" fill className="object-contain"></Image>
              </div>,
            ]}
          ></CarouselComponent>
        </DynamicSectionWrapper>
      </main>
    </div>
  );
}
