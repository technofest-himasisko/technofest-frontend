"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [direction, setDirection] = useState(0); // Initial direction set to 0 degrees

  const handleDirectionChange = () => {
    setTimeout(() => {
      const newDirection = Math.floor(Math.random() * 360); // Random direction between 0 and 360 degrees
      setDirection(newDirection);
    }, Math.random() * 4000 + 700);
  };

  useEffect(() => {
    handleDirectionChange();
  }, [direction]);

  return (
    <div className="relative flex flex-col min-h-dvh items-center overflow-hidden justify-center bg-slate-950 px-4 text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute opacity-10 w-[200vw] md:w-[80vw] -top-1/2 md:-top-[130%]"
      >
        <Image
          src="/tf2024_Frame.svg"
          alt="Technology Festival 2024"
          width={130}
          height={130}
          className="w-full"
        />
      </motion.div>
      <div className="relative">
        <motion.div
          className="needle"
          animate={{ rotate: direction }}
          transition={{ type: "spring", stiffness: 300, damping: 100 }}
        >
          <Image
            src="/tf2024_Frame.svg"
            alt="Technology Festival 2024"
            width={120}
            height={120}
          />
        </motion.div>

        <Image
          src="/tf2024_T.svg"
          alt="Technology Festival 2024"
          width={120}
          height={120}
          className="absolute inset-0 m-auto"
        />
      </div>
      <h1 className="mt-10 text-xl md:text-2xl bg-gradient-to-br from-primary to-secondary text-transparent bg-clip-text">
        Technology Festival 2024
      </h1>
      <p className="bg-gradient-to-br from-slate-500 to-slate-400 text-transparent bg-clip-text">
        Coming Soon
      </p>
    </div>
  );
}
