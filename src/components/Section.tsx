import React, { ReactNode } from "react";

// const SectionComponent = ({ children }: ReactNode) => {
//   return <section className="my-[40px] container mx-auto">{children}</section>;
// };

type Props = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  titleSection?: string;
  isFullWidth?: boolean;
};
const SectionComponent: React.FC<Props> = ({ titleSection, children, id, className, isFullWidth }) => {
  return (
    <section className={`${className} py-[40px] lg:py-[100px]`} id={id}>
      {isFullWidth ? (
        <div className="">
          <h2 className="text-center capitalize text-[30px] lg:text-[60px] font-accent mb-[40px]">{titleSection}</h2>
          <div className="content-section">{children}</div>
        </div>
      ) : (
        <div className="container mx-auto">
          <h2 className="text-center capitalize text-[30px] lg:text-[60px] font-accent mb-[40px]">{titleSection}</h2>
          <div className="content-section">{children}</div>
        </div>
      )}
    </section>
  );
};

export default SectionComponent;
