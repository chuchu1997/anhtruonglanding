import React, { ReactNode } from "react";
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

type propsCarousel = {
  className?: string;
  listJSXCarouselItem: ReactNode[];
  isShowDot?: boolean;
  isShowControlNextAndPrev?: boolean;

  responsiveTaiwindForItem?: string;
};
const CarouselComponent = ({ className, responsiveTaiwindForItem, listJSXCarouselItem, isShowDot, isShowControlNextAndPrev }: propsCarousel) => {
  return (
    <Carousel className="relative " opts={{ align: "start" }}>
      <CarouselContent className={`${className}  `}>
        {listJSXCarouselItem.map((jsxItem, index) => (
          <CarouselItem className={`relative   ${responsiveTaiwindForItem}`} key={index}>
            {jsxItem}
          </CarouselItem>
        ))}
      </CarouselContent>

      {isShowDot && <CarouselDots></CarouselDots>}

      {isShowControlNextAndPrev && (
        <div>
          <CarouselPrevious className="left-[10px]" />
          <CarouselNext className="right-[10px]" />
        </div>
      )}
    </Carousel>
  );
};

export default CarouselComponent;
