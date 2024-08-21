import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Package } from "react-feather";
import Photo from "@/components/Photo";
import ShortDescriptionWithCount from "@/components/ShortDescriptionWithCount";
import Services from "@/components/Services";
import SectionTitle from "@/components/SectionTitle";
import HotProducts from "@/components/HotProducts";

import RenderContentForSection from "@/components/RenderContentForSection";
import News from "@/components/News";

export default function Home() {
  let tuikhihathuyItems = [
    {
      title: "Túi khí trục vớt tàu D 2m x 14m",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/08/Tui-khi-bien-dong-2.jpg",
      href: "https://tuikhibiendong.com/tui-khi-truc-vot-tau-d2m-14m/",
    },
    {
      title: "Túi khí hạ thủy tàu D 2m x 10m",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/08/5a274daf98a46ffa36b5.jpg",
      href: "https://tuikhibiendong.com/tui-khi-ha-thuy-tau-d2m-10m/",
    },
    {
      title: "Phao hạ thủy tàu D 1,8m x 18m",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/08/5d7e49229c296b773238.jpg",
      href: "https://tuikhibiendong.com/phao-ha-thuy-tau-d1-8m-18m/",
    },
    {
      title: "Túi khí nâng hạ tàu 1,8m x 13m",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/08/Tui-khi-bien-dong-1.jpg",
      href: "https://tuikhibiendong.com/tui-khi-nang-ha-tau-1-8m-13m/",
    },
  ];

  let demchongvacaucangItems = [
    {
      title: "Fender D & Vuông",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/08/D-fender.jpg",
      href: "https://tuikhibiendong.com/fender-d-vuong/",
    },
    {
      title: "Fender kéo",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/08/Fender-keo.jpg",
      href: "https://tuikhibiendong.com/fender-keo/",
    },
    {
      title: "Phụ kiện & sửa chữa",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/08/Pi_Galery1.jpg",
      href: "https://tuikhibiendong.com/phu-kien-sua-chua/",
    },
    {
      title: "Fender hình trụ",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/08/Tru.jpg",
      href: "https://tuikhibiendong.com/fender-hinh-tru/",
    },
  ];

  let demchongvatauItems = [
    {
      title: "Đệm chống va",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/08/Dem-chong-va-tau.jpg",
      href: "https://tuikhibiendong.com/dem-chong-va/",
    },
    {
      title: "Đệm chống va Yokohama",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/08/Dem-chong-va-tau.jpg",
      href: "https://tuikhibiendong.com/dem-chong-va-yokohama/",
    },
    {
      title: "Đệm chống va chắn bùn",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/08/Dem-chong-va-tau.jpg",
      href: "https://tuikhibiendong.com/dem-chong-va-chan-bun/",
    },
    {
      title: "Đệm chống va đúc khuôn",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/08/Dem-chong-va-tau.jpg",
      href: "https://tuikhibiendong.com/dem-chong-va-duc-khuon/",
    },
  ];

  let mayphunxitapluccaoItems = [
    {
      title: "Showroom Densin",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/08/DENSIN-SHOWROOM.png",
      href: "https://tuikhibiendong.com/showroom-densin/",
    },
    {
      title: "Máy phun áp lực nước nóng DENSIN H200E",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2017/11/may-xit-densin-9.jpg",
      href: "https://tuikhibiendong.com/may-phun-ap-luc-nuoc-nong-densin-h200e/",
    },
    {
      title: "Máy phun áp lực nước nóng DENSIN H110E",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2017/11/may-xit-densin-9.jpg",
      href: "https://tuikhibiendong.com/may-phun-ap-luc-nuoc-nong-densin-h110e/",
    },
    {
      title: "Máy phun áp lực cao Densin Mermaid E-1100/16",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2017/11/may-xit-densin-3.jpg",
      href: "https://tuikhibiendong.com/may-phun-ap-luc-cao-densin-mermaide-1100-16/",
    },
  ];

  let hopsotauthuyItems = [
    {
      title: "Hộp số tàu thuỷ Weichai",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/07/hop-so-tau-thuy-3.jpg",
      href: "https://tuikhibiendong.com/hop-so-tau-thuy-weichai/",
    },
    {
      title: "Hộp số tàu thuỷ Fada",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/07/hop-so-tau-thuy-2.jpg",
      href: "https://tuikhibiendong.com/hop-so-tau-thuy-fada/",
    },
    {
      title: "Hộp số tàu thủy Fenji",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/07/hop-so-tau-thuy-1.jpg",
      href: "https://tuikhibiendong.com/hop-so-tau-thuy-fenji/",
    },
    {
      title: "Hộp số tàu thuỷ Advance",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/07/hop-so-tau-thuy-4.jpg",
      href: "https://tuikhibiendong.com/hop-so-tau-thuy-advance/",
    },
  ];
  let neotauItems = [
    {
      title: "Neo tàu",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/08/Neo-9.jpg",
      href: "https://tuikhibiendong.com/neo-tau-5/",
    },
    {
      title: "Neo tàu",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/08/Neo-9.jpg",
      href: "https://tuikhibiendong.com/neo-tau-5/",
    },
    {
      title: "Neo tàu",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/08/Neo-9.jpg",
      href: "https://tuikhibiendong.com/neo-tau-5/",
    },
    {
      title: "Neo tàu",
      imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/08/Neo-9.jpg",
      href: "https://tuikhibiendong.com/neo-tau-5/",
    },
  ];

  return (
    <main className="landing-page">
      <section className="container my-4 h-full mx-auto ">
        <div className="gap-4 flex flex-col md:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none pb-4">
            {/* <span className="text-xl">Công ty TNHH TM XNK</span> */}
            <h1 className="h1 mb-6 ">
              Công ty TNHH TM XNK
              <br />
              <span className="text-accent">Biển Đông</span>
            </h1>
            <p className="max-w-[500px] mb-8 text-black/80">
              Chúng tôi là một đơn vị chuyên phân phối, cung cấp, đấu thầu các dự án xích neo tàu thủy, hộp số máy tàu thủy FADA, xích neo cảng phao
              neo đậu tàu, xích chịu lực chuyên dụng và các phụ kiện như mắt nối xích, má ní, con quay, mắt may…
            </p>
            <div className="action-btn flex flex-col xl:flex-row items-center gap-8">
              <Button variant={"outline"} size={"lg"} className="uppercase flex items-center gap-2">
                <span>Tìm hiểu thêm</span>
                <Package />
              </Button>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>

        <div className="shortDescription">
          <ShortDescriptionWithCount />
        </div>
      </section>
      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <SectionTitle title="Các Sản Phẩm Chủ Đạo Của Công Ty " />
        <Services />
      </section>
      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <SectionTitle title="Các Sản Phẩm Nổi Bật " />
        <HotProducts />
      </section>
      {/* <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <SectionTitle title="Phao Túi Khí Hạ Thủy " />
        <PhaoTuiKhiHaThuy />
      </section>
      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <SectionTitle title="Đệm Chống Va Tàu " />
        <DemChongVaTau />
      </section> */}
      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <SectionTitle title="Phao Túi Khí Hạ Thủy " />
        <RenderContentForSection listItems={tuikhihathuyItems} />
      </section>
      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <SectionTitle title="Đệm Chống Va Cầu Cảng " />
        <RenderContentForSection listItems={demchongvacaucangItems} />
      </section>

      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <SectionTitle title="Đệm Chống Va Tàu " />
        <RenderContentForSection listItems={demchongvatauItems} />
      </section>
      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <SectionTitle title="Máy Phun Xịt Áp Lực Cao " />
        <RenderContentForSection listItems={mayphunxitapluccaoItems} />
      </section>

      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <SectionTitle title="Hộp Số Tàu Thủy" />
        <RenderContentForSection listItems={hopsotauthuyItems} />
      </section>
      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <SectionTitle title="Neo Và Xích Neo Tàu Thủy" />
        <RenderContentForSection listItems={neotauItems} />
      </section>

      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <SectionTitle title="Video Sản Phẩm" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4 xl:px-0">
          <iframe
            className="w-full h-[300px]"
            src="https://www.youtube.com/embed/V66Lc_RrWOE"
            title="Phao túi khí hạ thủy tàu | Công đoạn bàn giao túi khí hạ thuỷ D1.8 x 13m tại xưởng đóng tàu"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <iframe
            className="w-full h-[300px]"
            src="https://www.youtube.com/embed/WpySAlW6IpQ"
            title="Quy trình sản xuất phần chóp của Túi khí Biển Đông"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {/* <RenderContentForSection listItems={neotauItems} /> */}
      </section>

      <section className="container my-8 h-full mx-auto mt-[40px] xl:mt-[80px] ">
        <SectionTitle title="Tin Tức Nổi Bật" />
        <News />
        {/* <RenderContentForSection listItems={neotauItems} /> */}
      </section>
    </main>
  );
}
