"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
  return (
    <div className="w-full h-full relative">
      {/* <motion.div>
        <div className="w-[300px] h-[300px] md:w-[300px] md:h-[300px] xl:w-[500px] xl:h-[500px] mix-blend-lighten absolute">
          <Image src="/bancatgach.png" fill alt="" className="object-contain" priority quality={100} />
        </div>
      </motion.div> */}
      {/* <motion.svg
        className="w-[300px] h-[300px] xl:w-[550px] xl:h-[550px] relative"
        fill="transparent"
        viewBox={"0 0 506 506"}
        xmlns={"https://www.w3.org/2000/svg"}
      >


        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#FFF161"
          strokeWidth={4}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{ strokeDasharray: ["15 120 25 105", "16 25 50 50", "4 250 50 50"], rotate: [120, 360] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.circle>
      </motion.svg> */}
      <motion.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          borderRadius: "50%",
          //   backgroundColor: "#3498db",
          border: "4px dashed  #63b8eb", // Dashed border with a blue color
          borderStyle: "dashed double none",
          color: "#fff",
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          lineHeight: "200px",
        }}
        className=" w-[300px] h-[300px]   xl:w-[550px] xl:h-[550px] overflow-hidden"
        initial={{ strokeDasharray: "24 10 0 0" }}
        animate={{ strokeDasharray: ["15 120 25 105", "16 25 50 50", "4 250 50 50"], rotate: [120, 360] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
      >
        <Image src="/bannerImage.png" fill alt="" className="object-contain rounded-full p-2" priority quality={100} />
      </motion.div>
    </div>
  );
};

export default Photo;
