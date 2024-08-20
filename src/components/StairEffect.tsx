"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stair from "./Stair";
const StairEffect = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
          <Stair />
        </div>

        {/* <motion.div
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          animate={{ opacity: 0, transition: { delay: 1, duration: 0.4, ease: "easeInOut" } }}
          initial={{ opacity: 1 }}
        ></motion.div> */}
      </div>
    </AnimatePresence>
  );
};

export default StairEffect;
