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
    <div className="flex flex-col min-h-dvh items-center overflow-hidden justify-center bg-slate-950 px-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        className="absolute opacity-5 md:-top-[100%] -top-[30vh] w-[calc(100vw+300px)] md:w-auto"
      >
        <Image
          src="/logo_frame.png"
          alt="Technology Festival 2024"
          width={1300}
          height={1300}
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
            src="/logo_frame.png"
            alt="Technology Festival 2024"
            width={120}
            height={120}
          />
        </motion.div>

        <Image
          src="/logo_letter.png"
          alt="Technology Festival 2024"
          width={20}
          height={20}
          className="absolute inset-0 m-auto"
        />
      </div>
      <h1 className="mt-10 text-xl text-pink-700">Technology Festival 2024</h1>
      <p className="text-slate-400">Coming Soon</p>
    </div>
  );
}
