import React from "react";

import dynamic from "next/dynamic";
import Loading from "@/components/Loading";

const BannerMaster = dynamic(() => import("./components/banner/banner"), {
  loading: () => <Loading />,
  ssr: false,
});
const Section01 = dynamic(() => import("./components/section01/section01"), {
  loading: () => <Loading />,
  ssr: false,
});
const TrangChuEdit = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-[#ffffff] rounded-md shadow-md p-4 flex flex-col gap-4">
        <BannerMaster />
      </div>
      <div className="bg-[#ffffff] rounded-md shadow-md p-4">
        <Section01 />
      </div>
      <div className="bg-[#ffffff] rounded-md shadow-md p-4">1</div>
    </div>
  );
};

export default TrangChuEdit;
