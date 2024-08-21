import React from "react";

interface Props {
  title: string;
}
const SectionTitle = (props: Props) => {
  const { title } = props;
  return (
    <div className="flex justify-between items-center gap-6">
      <div className="border-double border-b-8 border-accent/60 w-full"></div>
      <h2 className="h3 w-[1600px] xl:w-full  text-center">{title}</h2>
      <div className="border-double border-b-8 border-accent/60 w-full"></div>
    </div>
  );
};

export default SectionTitle;
