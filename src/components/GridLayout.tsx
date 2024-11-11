import React from "react";

type Props = {
  children: React.ReactNode;
  columsDisplay: number;
  className?: string;
};
const GridLayout: React.FC<Props> = ({ children, columsDisplay, className }) => {
  return <div className={`${className} grid grid-cols-1 md:grid-cols-${columsDisplay}`}>{children}</div>;
};

export default GridLayout;
