"use client";
import styles from "../Legacy/legacy.module.css";

const Legacy = () => {
  return (
    <div className={styles.legacyContainer}>
      <div className={styles.legacyContent}>
        <h2>Legacy no longer</h2>
        <p>
          Talk to us to find out how we can transform your organisation for the
          future
        </p>
        <button>Contact Us {">"}</button>
      </div>
    </div>
  );
};

export default Legacy;
