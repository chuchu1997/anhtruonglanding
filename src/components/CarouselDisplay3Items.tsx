import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";
import Link from "next/link";
// import Autoplay from "embla-carousel-autoplay";

const CarouselDisplay3Items = () => {
  return (
    <Carousel
      className="mt-[14px]"
      // plugins={[
      //   Autoplay({
      //     delay: 4000,
      //   }),
      // ]}
    >
      <CarouselContent className="h-[160px] xl:h-[350px] ">
        <CarouselItem className="relative md:basis-1/2 lg:basis-1/3">
          <Link target="_blank" href="https://mayxaydungmoi.com/gia-lip-cat-gach-45-do/">
            <Image
              alt="Giá líp cắt gạch"
              src={"https://mayxaydungmoi.com/wp-content/uploads/2023/02/3-600x600.png"}
              fill
              className="object-contain"
              quality={90}
              priority
            ></Image>
          </Link>
        </CarouselItem>
        <CarouselItem className="relative md:basis-1/2 lg:basis-1/3">
          <Link target="_blank" href="https://mayxaydungmoi.com/mang-keo-rang-cua-inox-hang-loai-1/">
            <Image
              alt="Máng kéo răng cưa"
              src={"https://mayxaydungmoi.com/wp-content/uploads/2022/07/8-600x600.png"}
              fill
              className="object-contain"
              quality={90}
              priority
            ></Image>
          </Link>
        </CarouselItem>
        <CarouselItem className="relative md:basis-1/2 lg:basis-1/3">
          <Link target="_blank" href="https://mayxaydungmoi.com/ke-moc-can-bang-lat-gach/">
            <Image
              alt="Ke móc cân bằng lát gạch"
              src={"https://mayxaydungmoi.com/wp-content/uploads/2023/03/Ke-moc-can-bang-lat-gach-1.png"}
              fill
              className="object-contain"
              quality={90}
              priority
            ></Image>
          </Link>
        </CarouselItem>
        <CarouselItem className="relative md:basis-1/2 lg:basis-1/3">
          <Link target="_blank" href="https://mayxaydungmoi.com/luoi-cat-gach-panapro-dang-but/">
            <Image
              alt="Lưỡi cắt gạch PanaPro dạng bút"
              src={"https://mayxaydungmoi.com/wp-content/uploads/2023/02/2.png"}
              fill
              className="object-contain"
              quality={90}
              priority
            ></Image>
          </Link>
        </CarouselItem>

        <CarouselItem className="relative md:basis-1/2 lg:basis-1/3">
          <Link target="_blank" href="/https://mayxaydungmoi.com/nem-can-bang-lat-gach/">
            <Image
              alt="Nêm cân bằng lát gạch 1kg"
              src={"https://mayxaydungmoi.com/wp-content/uploads/2023/03/11-600x600.png"}
              fill
              className="object-contain"
              quality={90}
              priority
            ></Image>
          </Link>
        </CarouselItem>
        <CarouselItem className="relative md:basis-1/2 lg:basis-1/3">
          <Link target="_blank" href="https://mayxaydungmoi.com/ke-lat-gach-ke-chu-t-ke-vit-lat-gach-can-bang-tui-50-chiec/">
            <Image
              alt="Ke lát gạch ke chữ T ke vít lát gạch cân bằng túi 50 chiếc"
              src={"https://mayxaydungmoi.com/wp-content/uploads/2022/05/ke-nhua-can-bang-gach.jpg"}
              fill
              className="object-contain"
              quality={90}
              priority
            ></Image>
          </Link>
        </CarouselItem>
        {/* <CarouselItem className="md:basis-1/2 lg:basis-1/3">...</CarouselItem>
        <CarouselItem className="relative"></CarouselItem> */}
        {/* <CarouselItem className="relative">
          <Image
            alt="Giá líp cắt gạch"
            src={"https://mayxaydungmoi.com/wp-content/uploads/2023/02/3-600x600.png"}
            fill
            className="object-contain"
            quality={90}
            priority
          ></Image>
        </CarouselItem> */}
        {/* <CarouselItem className="relative">...</CarouselItem>
        <CarouselItem className="relative">...</CarouselItem>
        <CarouselItem className="relative">...</CarouselItem>
        <CarouselItem className="relative">...</CarouselItem>
        <CarouselItem className="relative">...</CarouselItem> */}

        {/* {listImages.map((item, index) => {
          return (
            <CarouselItem className="relative" key={index}>
              <Image alt="s" src={item} fill className="object-contain" quality={90} priority></Image>
            </CarouselItem>
          );
        })} */}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselDisplay3Items;
