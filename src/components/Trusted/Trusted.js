import React from "react";
import styles from "../Trusted/trusted.module.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Trusted = () => {
  return (
    <div className={styles.trustedContainer}>
      <h4>TRUSTED BY THE BEST </h4>
      <div className={styles.trustedDivContent}>
        <div className={styles.trustedContent}>
          <h1>{">20"}</h1>

          <p>Year of Experience</p>
        </div>
        <div className={styles.trustedContent}>
          <h1>40+</h1>
          <p>Financial Institutions</p>
        </div>
        <div className={styles.trustedContent}>
          <h1>{">200M"}</h1>
          <p>Customer Each</p>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
