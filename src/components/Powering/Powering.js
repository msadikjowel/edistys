"use client";
import { useEffect } from "react";
import React from "react";
import styles from "../Powering/powering.module.css";
import Image from "next/image";
import powerImage from "../../assets/powerImage.jpg";
import PowerSVG1 from "../SVGContainer/PowerSVG1";
import PowerSVG2 from "../SVGContainer/PowerSVG2";
import PowerSVG3 from "../SVGContainer/PowerSVG3";
import SVG1 from "../SVGContainer/SVG1";
import { motion, useMotionValue, useTransform } from "framer-motion";
const Powering = () => {
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
    <div className={styles.powerContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>POWERING THE FUTURE OF FINANCE</h1>
        <h2 className={styles.subtitle}>
          Uncovering new ways to delight customers
        </h2>
        <p className={styles.text1}>
          AnyTech is revolutionising financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p className={styles.text2}>
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </div>

      <div className={styles.powerImage}>
        <Image src={powerImage} alt="Power Image" width={450} />
        <PowerSVG1 />
        <PowerSVG2 />
        <PowerSVG3 />

        {/* svg */}
        <motion.div
          className={styles.powerImageSVGContainer}
          style={{ x: moveX, y: moveY }}
        >
          <SVG1 />
        </motion.div>
        <motion.div
          className={styles.powerImageSVGContainer2}
          style={{ x: moveX, y: moveY }}
        >
          <SVG1 />
        </motion.div>
      </div>

      {/* mobile text */}
      <div className={styles.desktopHidden}>
        <p className={styles.text3}>
          AnyTech is revolutionising financial technology by introducing
          innovative and real-time transaction account processing capabilities,
          specifically designed for retail financial services.
        </p>
        <p className={styles.text4}>
          Our modern approach surpasses traditional banking and card processing
          systems, empowering you with the most advanced technology for lasting
          success.
        </p>
      </div>
    </div>
  );
};

export default Powering;
