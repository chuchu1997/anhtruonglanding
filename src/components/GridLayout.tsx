import React from "react";

// const SectionComponent = ({ children }: ReactNode) => {
//   return <section className="my-[40px] container mx-auto">{children}</section>;
// };

type Props = {
  children: React.ReactNode;
};
const GridLayout: React.FC<Props> = ({ children }) => {
  return <div className="grid grid-cols-2  lg:grid-cols-3  gap-[20px] md:gap-[20px] lg:gap-[100px] mt-10 px-10 xl:px-0">{children}</div>;
};

export default GridLayout;
