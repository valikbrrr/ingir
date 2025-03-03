import { ReactNode } from "react";
import styles from "./OurServices.module.css";
import {
  AutomaticBlockIcon,
  CleaningBlockIcon,
  CoolingBlockIcon,
  ElectroBlockIcon,
  EngineeringBlockIcon,
  FireAlarmBlockIcon,
  HeatBlockIcon,
  WaterBlockIcon,
} from "@shared/assets";

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

const CARD_INDEX_TO_IMAGE_MAP: Record<number, string> = {
  1: "src/shared/assets/images/waterBlockBg.jpg",
  3: "src/shared/assets/images/engineeringBlockBg.jpg",
  6: "src/shared/assets/images/electroBlockBg.jpg",
  8: "src/shared/assets/images/heatBlockBg.jpg",
  9: "src/shared/assets/images/coolingBlockBg.jpg",
  11: "src/shared/assets/images/fireAlarmBlockBg.jpg",
  14: "src/shared/assets/images/cleaningBlockBg.jpg",
  16: "src/shared/assets/images/automaticBlockBg.jpg",
};

const CARD_INDEX_TO_ICON_MAP: Record<number, ReactNode> = {
  1: <EngineeringBlockIcon className={styles.iconCard} />,
  3: <WaterBlockIcon className={styles.iconCard} />,
  6: <ElectroBlockIcon className={styles.iconCard} />,
  8: <HeatBlockIcon className={styles.iconCard} />,
  9: <CoolingBlockIcon className={styles.iconCard} />,
  11: <FireAlarmBlockIcon className={styles.iconCard} />,
  14: <CleaningBlockIcon className={styles.iconCard} />,
  16: <AutomaticBlockIcon className={styles.iconCard} />,
};

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
                const icon = Object.keys(CARD_INDEX_TO_ICON_MAP).includes(
                  String(block.id)
                );

                const images = Object.keys(CARD_INDEX_TO_IMAGE_MAP).includes(
                  String(block.id)
                );

                return (
                  <div
                    className={styles.imageBlock}
                    style={{
                      backgroundImage: `url(${
                        images ? CARD_INDEX_TO_IMAGE_MAP[block.id] : ""
                      })`,
                    }}
                  >
                    {icon && CARD_INDEX_TO_ICON_MAP[block.id]}
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
