"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./AnimatedImage.css";

interface Props {
  width: number;
  height: number;
  src: string;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedImage: React.FC<Props> = ({
  width,
  height,
  src,
  objectFit,
  alt,
  className,
  style,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div ref={ref} className={"animatedImageContainer w-fit"}>
      <div className={`${inView ? "slideBox" : ""}`} />
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ duration: 0.5, delay: 0.7 }}>
        <Image
          style={style}
          width={width}
          height={height}
          alt={alt}
          src={src}
          objectFit={objectFit}
          className={className}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedImage;
