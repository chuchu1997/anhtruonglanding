import React, { ReactNode } from "react";

// const SectionComponent = ({ children }: ReactNode) => {
//   return <section className="my-[40px] container mx-auto">{children}</section>;
// };

type Props = {
  children: React.ReactNode;
  id: string;
};
const SectionComponent: React.FC<Props> = ({ children, id }) => {
  return (
    <section className="my-[80px] container mx-auto" id={id}>
      {children}
    </section>
  );
};

export default SectionComponent;
