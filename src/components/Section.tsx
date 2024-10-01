import React, { ReactNode } from "react";

// const SectionComponent = ({ children }: ReactNode) => {
//   return <section className="my-[40px] container mx-auto">{children}</section>;
// };

type Props = {
  children: React.ReactNode;
  id: string;
  className?: string;
};
const SectionComponent: React.FC<Props> = ({ children, id, className }) => {
  return (
    <section className={`my-[40px] container mx-auto ${className}`} id={id}>
      {children}
    </section>
  );
};

export default SectionComponent;
