import { bgHeader, EngirLogo, LogIcon } from "@shared/assets";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const scrollThresholdHeader = 200;

  const handleScrollForHeader = () => {
    const scrollY = window.scrollY;

    if (scrollY > scrollThresholdHeader) {
      setIsHeaderVisible(true);
    } else {
      setIsHeaderVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollForHeader);
    return () => {
      window.removeEventListener("scroll", handleScrollForHeader);
    };
  }, []);

  return (
    <header
      className={styles.headerFixed}
      style={{
        backgroundImage: isHeaderVisible ? `url(${bgHeader})` : "none",
        transition: "opacity 0.5s",
      }}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.leftContent}>
          <EngirLogo />
          <a href="tel: +375 (17) 388 06 75" className={styles.phoneNumber}>
            +375 (17) 388 06 75
          </a>
          <p>220088, г. Минск, ул. Андреевская, д. 4А</p>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.changeLang}>
            <a href="" className={styles.russianLang}>
              RU
            </a>
            <a href="" className={styles.englishLang}>
              EN
            </a>
          </div>
          <a href="" className={styles.enter}>
            <LogIcon />
            <p>вход</p>
          </a>
        </div>
      </div>
    </header>
  );
};
