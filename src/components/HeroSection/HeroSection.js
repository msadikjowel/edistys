"use client";
import { useEffect } from "react";
// import { useEffect } from "react";
import React from "react";
import styles from "../HeroSection/heroSection.module.css";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import SVG1 from "../SVGContainer/SVG1";
import SVG2 from "../SVGContainer/SVG2";

const HeroSection = () => {
  // mouse move animation to svgs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const moveX = useTransform(mouseX, [-1, 1], ["-50px", "50px"]);
  const moveY = useTransform(mouseY, [-1, 1], ["-50px", "50px"]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY, innerWidth, innerHeight } = window;
      const xMove = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const yMove = (e.clientY - innerHeight / 2) / (innerHeight / 2);

      mouseX.set(xMove);
      mouseY.set(yMove);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>Embrace the future of finance</h1>
        <p>
          Reimagine financial services with our open platform, distributed
          banking solution that powers transformation.
        </p>
        <Link href="#" className={styles.heroButton}>
          Reach Out to Us ›
        </Link>
      </div>

      <div className={styles.heroImageWrapper}>
        <motion.div className={styles.heroImage}></motion.div>
      </div>

      {/* top right corner gradient style */}
      <div className={`${styles.cornerDiv} ${styles.topCorner}`}></div>

      {/* animated svg */}
      <div className={styles.SVGContainer}>
        <motion.div
          className={styles.animationDiv}
          style={{ x: moveX, y: moveY }}
        >
          <SVG1 className={styles.svg1} />
        </motion.div>
        <motion.div
          className={styles.animationDiv}
          style={{ x: moveX, y: moveY }}
        >
          <SVG2 className={styles.svg2} />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
