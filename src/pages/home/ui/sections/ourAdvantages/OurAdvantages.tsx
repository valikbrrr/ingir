import { RequestIcon, StafIcon, UniformOrderIcon } from "@shared/assets";
import styles from "./ourAdvantages.module.css";

export const OurAdvantages = () => {
  return (
    <section className={styles.ourAdvantages}>
      <div className={styles.ourAdvantagesTitle}>
        <h2>Наши преимущества</h2>
      </div>
      <div className={styles.ourAdvantagesCards}>
        <div className={styles.card}>
          <div className={styles.advantagesIconBlock}>
            <StafIcon />
          </div>
          <div className={styles.advantagesTextBlock}>
            Квалифицированный
            <br /> персонал
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.advantagesIconBlock}>
            <RequestIcon />
          </div>
          <div className={styles.advantagesTextBlock}>
            Онлайн подача
            <br /> заявок 24/7
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.advantagesIconBlock}>
            <UniformOrderIcon />
          </div>
          <div className={styles.advantagesTextBlock}>
            Единый
            <br /> подрядчик
          </div>
        </div>
      </div>
    </section>
  );
};
