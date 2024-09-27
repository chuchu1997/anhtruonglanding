import React from "react";

// const SectionComponent = ({ children }: ReactNode) => {
//   return <section className="my-[40px] container mx-auto">{children}</section>;
// };

type Props = {
  children: React.ReactNode;
};
const GridLayout: React.FC<Props> = ({ children }) => {
  return <div className="grid grd-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 px-10 xl:px-0">{children}</div>;
};

export default GridLayout;
