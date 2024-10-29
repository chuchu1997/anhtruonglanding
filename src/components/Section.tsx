import React, { ReactNode } from "react";

// const SectionComponent = ({ children }: ReactNode) => {
//   return <section className="my-[40px] container mx-auto">{children}</section>;
// };

type Props = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  titleSection?: string;
};
const SectionComponent: React.FC<Props> = ({ titleSection, children, id, className }) => {
  return (
    <section className={`${className} `} id={id}>
      <div className="container mx-auto">
        <h2 className="capitalize text-[32px] lg:text-[38px] font-accent  mb-[15px]">{titleSection}</h2>
        <div className="content-section">{children}</div>
      </div>
    </section>
  );
};

export default SectionComponent;
