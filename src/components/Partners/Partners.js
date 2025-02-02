import React from "react";
import styles from "../Partners/partner.module.css";
import logo1 from "../../assets/partners/logo/logo (1).jpg";
import logo2 from "../../assets/partners/logo/logo (2).jpg";
import logo3 from "../../assets/partners/logo/logo (3).jpg";
import logo4 from "../../assets/partners/logo/logo (4).jpg";
import logo5 from "../../assets/partners/logo/logo (5).jpg";
import logo6 from "../../assets/partners/logo/logo (6).jpg";
import logo7 from "../../assets/partners/logo/logo (7).jpg";
import logo8 from "../../assets/partners/logo/logo (8).jpg";
import logo9 from "../../assets/partners/logo/logo (9).jpg";
import logo10 from "../../assets/partners/logo/logo (10).jpg";
import logo11 from "../../assets/partners/logo/logo (11).jpg";
import logo12 from "../../assets/partners/logo/logo (12).jpg";
import logo13 from "../../assets/partners/logo/logo (13).jpg";
import logo14 from "../../assets/partners/logo/logo (14).jpg";
import logo15 from "../../assets/partners/logo/logo (15).jpg";
import Image from "next/image";

const Partners = () => {
  const items = [
    {
      img: logo1,
    },
    {
      img: logo2,
    },
    {
      img: logo3,
    },
    {
      img: logo4,
    },
    {
      img: logo5,
    },
    {
      img: logo6,
    },
    {
      img: logo7,
    },
    {
      img: logo8,
    },
    {
      img: logo9,
    },
    {
      img: logo10,
    },
    {
      img: logo11,
    },
    {
      img: logo12,
    },
    {
      img: logo13,
    },
    {
      img: logo14,
    },
    {
      img: logo15,
    },
  ];

  return (
    <div className={styles.logoContainer}>
      {items.map((item, index) => (
        <Image
          key={index}
          src={item.img}
          width={200}
          height="auto"
          alt={`image ${index}`}
          className={styles.logoImage}
        />
      ))}
    </div>
  );
};

export default Partners;
