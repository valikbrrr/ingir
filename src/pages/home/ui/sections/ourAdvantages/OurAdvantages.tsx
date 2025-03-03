import { RequestIcon, StafIcon, UniformOrderIcon } from "@shared/assets";
import styles from "./ourAdvantages.module.css";

export const OurAdvantages = () => {
  // Массив данных для карточек
  const advantagesCards = [
    {
      icon: <StafIcon />,
      text: "Квалифицированный\nперсонал",
    },
    {
      icon: <RequestIcon />,
      text: "Онлайн подача\nзаявок 24/7",
    },
    {
      icon: <UniformOrderIcon />,
      text: "Единый\nподрядчик",
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
            <div className={styles.advantagesTextBlock}>
              {card.text.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
