import styles from "./OurServices.module.css";

const contentBlocks = [
  {
    id: 1,
    type: "image",
  },
  {
    id: 2,
    type: "text",
    text: "Техническое обслуживание и ремонт водопровода и канализации",
  },
  {
    id: 3,
    type: "image",
  },
  {
    id: 4,
    type: "text",
    text: "Инжиринговые услуги",
  },
  {
    id: 5,
    type: "text",
    text: "Техническое обслуживание, монтаж и ремонт сетей электроснабжения и освещения",
  },
  {
    id: 6,
    type: "image",
  },
  {
    id: 7,
    type: "text",
    text: "Техническое обслуживание и ремонт систем отопления и сетей теплоснабжения",
  },
  {
    id: 8,
    type: "image",
  },
  {
    id: 9,
    type: "image",
  },
  {
    id: 10,
    type: "text",
    text: "Техническое обслуживание, монтаж и ремонт систем вентиляции и кондиционирования",
  },
  {
    id: 11,
    type: "image",
  },
  {
    id: 12,
    type: "text",
    text: "Техническое обслуживание, и ремонт систем автоматического пожаротушения и пожарной сигнализации",
  },
  {
    id: 13,
    type: "text",
    text: "Клининг и дезинфекция",
  },
  {
    id: 14,
    type: "image",
  },
  {
    id: 15,
    type: "text",
    text: "Техническое обслуживание систем автоматики и КиП",
  },
  {
    id: 16,
    type: "image",
  },
];

export const OurServices = () => {
  return (
    <section className={styles.ourServices}>
      <div className={styles.sectionTitle}>
        <h2>Наши услуги</h2>
      </div>
      <div className={styles.cardsWrap}>
        {contentBlocks.map((block, index) => (
          <div key={index} className={styles.card}>
            {block.type === "image" ? (
              (() => {
                const iconUrl = `src/shared/assets/images/services/icons/${block.id}.svg`;
                const bgUrl = `src/shared/assets/images/services/bgs/${block.id}.jpg`;

                return (
                  <div
                    className={styles.imageBlock}
                    style={{
                      backgroundImage: `url(${bgUrl})`,
                    }}
                  >
                    {<img src={iconUrl} className={styles.iconCard} />}
                  </div>
                );
              })()
            ) : (
              <div className={styles.textCard}>
                <h3>{block.text}</h3>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
