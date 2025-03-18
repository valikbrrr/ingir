import { useEffect, useState } from "react";
import styles from "./OurServices.module.css";
import { SectionTitle } from "@widgets/sectionTitle";

const contentBlocksFourCol = [
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

const twoColOrder = [2, 1, 3, 4, 5, 6, 8, 7, 10, 9, 11, 12, 13, 14, 16, 15];
const oneColOrder = [1, 2, 3, 4, 6, 5, 8, 7, 9, 10, 11, 12, 14, 13, 16, 15];

const contentBlocksTwoCol = twoColOrder
  .map((id) => contentBlocksFourCol.find((block) => block.id === id))
  .filter((block) => block !== undefined);

const contentBlocksOneCol = oneColOrder
  .map((id) => contentBlocksFourCol.find((block) => block.id === id))
  .filter((block) => block !== undefined);

export const OurServices = () => {
  const [currentBlocks, setCurrentBlocks] = useState(contentBlocksFourCol);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width > 1400) {
        setCurrentBlocks(contentBlocksFourCol);
      } else if (width >= 701 && width <= 1400) {
        setCurrentBlocks(contentBlocksTwoCol);
      } else {
        setCurrentBlocks(contentBlocksOneCol);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={styles.ourServices}>
      <SectionTitle text="Наши услуги" />
      <div className={styles.cardsWrap}>
        {currentBlocks.map((block, index) => (
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
                    <img src={iconUrl} className={styles.iconCard} />
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
