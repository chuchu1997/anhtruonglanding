import React from "react";

// const SectionComponent = ({ children }: ReactNode) => {
//   return <section className="my-[40px] container mx-auto">{children}</section>;
// };

type Props = {
  children: React.ReactNode;
  className?: string;
};
const GridLayout: React.FC<Props> = ({ children, className }) => {
  return <div className={`mt-[10px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ${className}`}>{children}</div>;
};

export default GridLayout;
