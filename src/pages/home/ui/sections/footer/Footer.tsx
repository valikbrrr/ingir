import { bgFooter, EngirLogo, InstagramIcon, LinkedinIcon, PhoneIcon } from "@shared/assets";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer
      className={styles.footer}
      style={{
        backgroundImage: `url(${bgFooter})`,
      }}
    >
      <div className={styles.footerTop}>
        <div className={styles.logoBlock}>
          <EngirLogo />
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.infoBlock1}>
            <div className={styles.phoneNumberBlock}>
              <a href="tel: +375 (17) 388 06 75" className={styles.phoneNumber}>
                +375 (17) 388 06 75
              </a>
              <PhoneIcon />
            </div>
            <p className={styles.adress}>
              220088, г. Минск, ул. Андреевская, д. 4А
            </p>
            <div className={styles.emailBlock}>
              <p>Email:</p>
              <a href="email: info@engir.by">info@engir.by</a>
            </div>
          </div>
          <div className={styles.infoBlock2}>
            <p>
              УНП: 192562702 220088, <br /> г. Минск, ул. Андреевская, д. 4А
            </p>
          </div>
          <div className={styles.infoBlock3}>
            <a
              href="https://www.linkedin.com/company/27218226/"
              className={styles.linkedinBlock}
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://www.instagram.com/engir.by/"
              className={styles.instagramBlock}
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Все права защищены</p>
      </div>
    </footer>
  );
};
