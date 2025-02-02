"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../components/shared/navbar2.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import logo from "../../assets/logo.svg";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isENOpen, setIsENOpen] = useState(true);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  //   nav bg change on scroll
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 64) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <header
      className={color ? `${styles.header} ${styles.scrollNav}` : styles.header}
    >
      <div className={styles.container}>
        <div className={`${styles.grid} ${styles.navbarGrid}`}>
          <div className={styles.logo}>
            <Image src={logo} alt="logo" />
          </div>

          <div className={showMenu ? styles.menuMobile : styles.menuDesktop}>
            <ul className={styles.ul}>
              <li
                className={
                  color
                    ? `${styles.dropDown} ${styles.solutions} ${styles.onScroll}`
                    : `${styles.dropDown} ${styles.solutions}`
                }
                onClick={() => setIsOpen(!isOpen)}
              >
                Solutions <KeyboardArrowDownIcon />
                <ul className={isOpen ? styles.isOpen : styles.solutionsDrop}>
                  <li>AnyCaas</li>
                  <li className={styles.dropLine}>AnyBaas</li>
                  <li>AnyPaas</li>
                </ul>
              </li>
              <li
                className={
                  color
                    ? `${styles.services} ${styles.onScroll}`
                    : `${styles.services}`
                }
              >
                <Link href="/">Services</Link>
                <h6 className={styles.underline}></h6>
              </li>
              <li
                className={
                  color
                    ? `${styles.services} ${styles.onScroll}`
                    : `${styles.services}`
                }
              >
                <Link href="/">About Us</Link>
                <h6 className={styles.underline}></h6>
              </li>
              <li
                className={
                  color
                    ? `${styles.dropDown} ${styles.ENDropDown} ${styles.onScroll}`
                    : `${styles.dropDown} ${styles.ENDropDown}`
                }
                onClick={() => setIsENOpen(!isENOpen)}
              >
                <LanguageIcon className={styles.gap} /> EN{" "}
                <KeyboardArrowDownIcon />
                <ul className={isENOpen ? styles.isOpen : styles.ENDrop}>
                  <li>EN (English)</li>
                  <li className={styles.dropLine}>TH (Thai)</li>
                  <li className={styles.dropLine2}>ID (Bahasa Indonesia)</li>
                  <li>TW (Traditional Chinese)</li>
                </ul>
              </li>
              <li className={`${styles.Mcontact} ${styles.contactButton}`}>
                <button>Contact Us</button>
              </li>
            </ul>
          </div>

          <div
            className={
              color
                ? `${styles.Dcontact} ${styles.contactButton} ${styles.onScrollContact}`
                : `${styles.Dcontact} ${styles.contactButton}`
            }
          >
            <button>Contact Us</button>
            <KeyboardArrowRightIcon className={styles.rightArrow} />
          </div>

          <div className={styles.hamMenu}>
            <button className={styles.button} onClick={handleButtonToggle}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
