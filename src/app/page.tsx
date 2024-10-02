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
    <div className="page-container">
      <main className="main">
        <section className="hero-section relative ">
          {/* <div className="background-opacity absolute border-2 border-[red] z-20 w-full h-full bg-black bg-opacity-25"></div> */}
          {/* <div className="relative z-10">
          
          </div> */}
          <CarouselBanner listImages={data.banner} />
     
        </section>
        <section>HEHE</section>
      </main>
    </div>
  );
}
