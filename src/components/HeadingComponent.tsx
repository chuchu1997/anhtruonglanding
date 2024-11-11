import React from "react";

interface propsHeadingProps {
  mainTitle?: string;
  subTitle?: string;
}
const HeadingComponent = ({ mainTitle, subTitle }: propsHeadingProps) => {
  return (
    <div className="text-center">
      {subTitle && (
        <h2 className="border-b-4 mb-[10px] border-accent text-center capitalize text-[24px] text-[#a50000] font-bold max-w-[350px] mx-auto">
          {subTitle}
        </h2>
      )}
      {mainTitle && (
        <h2 className=" w-full lg:w-[600px] mx-auto text-center capitalize text-[30px] lg:text-[40px] font-accent mb-[40px]">{mainTitle}</h2>
      )}
    </div>
  );
};

export default HeadingComponent;
