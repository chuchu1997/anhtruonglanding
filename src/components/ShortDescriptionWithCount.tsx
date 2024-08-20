"use client";
import React from "react";
import CountUp from "react-countup";

const items = [
  {
    num: 12,
    text: "HEHEH",
  },
  {
    num: 26,
    text: "HEHEHsqws ",
  },
  {
    num: 8,
    text: "HEHEH sds",
  },
  {
    num: 500,
    text: "HEHEH dwdqwdd ",
  },
];
const ShortDescriptionWithCount = () => {
  return (
    <section className="py-4">
      <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
        {items.map((item, index) => {
          return (
            <div key={index} className="flex-1 flex gap-6 items-center justify-center xl:justify-start">
              <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
              <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ShortDescriptionWithCount;
