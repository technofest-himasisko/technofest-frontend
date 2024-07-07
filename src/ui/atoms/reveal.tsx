"use client";

import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  direction?: "up" | "left" | "right";
  opacityOnly?: boolean;
  noDelay?: boolean;
}

export default function Reveal({
  children,
  width = "fit-content",
  direction = "up",
  opacityOnly = false,
  noDelay = false,
  //...rest
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: direction === "up" && !opacityOnly ? 75 : 0,
            x:
              direction === "left" && !opacityOnly
                ? 75
                : direction === "right" && !opacityOnly
                  ? -75
                  : 0,
          },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: noDelay ? 0 : 0.4 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
