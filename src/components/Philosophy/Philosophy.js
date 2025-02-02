import Image from "next/image";
import React from "react";
import philosophy from "../../assets/philosophy1.jpg";
import styles from "../Philosophy/philosophy.module.css";

const Philosophy = () => {
  return (
    <div className={styles.philosophy}>
      <div className={styles.philosophyContainer}>
        <p>OUR PHILOSOPHY </p>
        <h1>Human-centred innovation</h1>
        <Image
          src={philosophy}
          width="auto"
          height="auto"
          alt="philosophy image"
        />
      </div>
    </div>
  );
};

export default Philosophy;
