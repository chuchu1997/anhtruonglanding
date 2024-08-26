import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
  return (
    <div className="w-full h-full relative">
      {/* <motion.div
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

      
      
      </motion.div> */}

      <div className="w-[300px] h-[300px]   xl:w-[550px] xl:h-[550px] overflow-hidden">
        <Image
          src="/bannerphoto.png"
          // sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,33vw"
          fill
          alt=""
          className="object-contain rounded-full p-2"
          priority
          quality={35}
        />
      </div>
    </div>
  );
};

export default Photo;
