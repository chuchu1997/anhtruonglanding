import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Package } from "react-feather";
import Photo from "@/components/Photo";
import ShortDescriptionWithCount from "@/components/ShortDescriptionWithCount";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="landing-page">
      <section className="container my-4 h-full mx-auto ">
        <div className="gap-4 flex flex-col md:flex-row justify-between items-center xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none pb-4">
            <span className="text-xl">Software developer</span>
            <h1 className="h1 mb-6">
              MAIN PRODUCT
              <br />
              <span className="text-accent">Luke Man</span>
            </h1>
            <p className="max-w-[500px] mb-8 text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor amet labore voluptatibus explicabo vitae maiores nihil? Placeat, libero
              nostrum nihil necessitatibus,{" "}
            </p>
            <div className="action-btn flex flex-col xl:flex-row items-center gap-8">
              <Button variant={"outline"} size={"lg"} className="uppercase flex items-center gap-2">
                <span>Đặt hàng ngay</span>
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

      <section className="container my-4 h-full mx-auto ">
        <Services />
      </section>

      <section className="container my-4 mx-auto h-[300px] md:h-[600px] border-2 border-white">
        {/* <div className="group bg-white ...">
          <p className="text-black group-hover:text-white ...">New Project</p>
          <p className="text-black group-hover:text-white ...">Create a new project from a variety of starting templates.</p>
        </div> */}
      </section>

      {/* <Button>CUONG</Button>
      <h1 className="text-rose-500">This is home page</h1> */}
    </main>
  );
}
