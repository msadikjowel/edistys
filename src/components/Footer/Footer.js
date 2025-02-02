import React from "react";
import styles from "../Footer/footer.module.css";
import footerLogo from "../../assets/logo.png";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <Image src={footerLogo} alt="footer logo" width="auto" />
        </div>
        <div className={styles.footerH2}>
          <h2>Our Solution</h2>
          <h2>AnySaas</h2>
          <h2>AnyBaas</h2>
          <h2>AnyPaas</h2>
        </div>
        <div className={styles.footerIcon}>
          <div>
            <FacebookIcon />
          </div>
          <div className={styles.footerGap}>
            <LinkedInIcon />
          </div>
          <div>
            <InstagramIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
