"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Only import pagination CSS
import { Pagination } from "swiper/modules"; // Only import Pagination module
import ShareIcon from "@mui/icons-material/Share";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import MemoryIcon from "@mui/icons-material/Memory";
import styles from "../SolutionSimplify/solutionSimplify.module.css";
import { useEffect, useState } from "react";

const SolutionSimplify = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen width is 768px
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.solutionSimplifyContainer}>
      {isMobile ? (
        // Swiper for mobile (768px and below)
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          <SwiperSlide className={styles.slideMiddle}>
            <div className={styles.solutions}>
              <ShareIcon className={styles.solutionsIcon} />
              <h2>Full-suite solutions</h2>
              <p>
                Experience the ease of integration across various banking and
                payment functions with our comprehensive suite of solutions.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slideMiddle}>
            <div className={styles.solutions}>
              <LightbulbIcon className={styles.solutionsIcon2} />
              <h2>Simplify the complex</h2>
              <p>
                Simplify complex processes and optimise your financial
                operations by leveraging the power of AI, Blockchain, Cloud
                Computing, and Big Data.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slideMiddle}>
            <div className={styles.solutions}>
              <MemoryIcon className={styles.solutionsIcon3} />
              <h2>Cutting-edge tech</h2>
              <p>
                We seamlessly combine cutting-edge technologies, resulting in an
                unparalleled fintech experience for financial institutions.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        // Normal layout for larger screens
        <>
          <div className={styles.solutions}>
            <ShareIcon className={styles.solutionsIcon} />
            <h2>Full-suite solutions</h2>
            <p>
              Experience the ease of integration across various banking and
              payment functions with our comprehensive suite of solutions.
            </p>
          </div>
          <div className={styles.solutions}>
            <LightbulbIcon className={styles.solutionsIcon2} />
            <h2>Simplify the complex</h2>
            <p>
              Simplify complex processes and optimise your financial operations
              by leveraging the power of AI, Blockchain, Cloud Computing, and
              Big Data.
            </p>
          </div>
          <div className={styles.solutions}>
            <MemoryIcon className={styles.solutionsIcon3} />
            <h2>Cutting-edge tech</h2>
            <p>
              We seamlessly combine cutting-edge technologies, resulting in an
              unparalleled fintech experience for financial institutions.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default SolutionSimplify;
