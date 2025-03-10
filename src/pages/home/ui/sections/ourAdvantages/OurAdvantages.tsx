import { RequestIcon, StafIcon, UniformOrderIcon } from "@shared/assets";
import styles from "./ourAdvantages.module.css";

export const OurAdvantages = () => {
  // Массив данных для карточек
  const advantagesCards = [
    {
      icon: <StafIcon />,
      text: (
        <p>
          Квалифицированный
          <br />
          персонал
        </p>
      ),
    },
    {
      icon: <RequestIcon />,
      text: (
        <p>
          Онлайн подача
          <br />
          заявок 24/7
        </p>
      ),
    },
    {
      icon: <UniformOrderIcon />,
      text: (
        <p>
          Единый
          <br />
          подрядчик
        </p>
      ),
    },
  ];

  return (
    <section className={styles.ourAdvantages}>
      <div className={styles.ourAdvantagesTitle}>
        <h2>Наши преимущества</h2>
      </div>

      <div className={styles.ourAdvantagesCards}>
        {advantagesCards.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.advantagesIconBlock}>{card.icon}</div>
            <div className={styles.advantagesTextBlock}>{card.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
