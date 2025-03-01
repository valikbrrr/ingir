import { AutomaticBlockIcon, CleaningBlockIcon, CoolingBlockIcon, ElectroBlockIcon, EngineeringBlockIcon, FireAlarmBlockIcon, HeatBlockIcon, WaterBlockIcon } from "@shared/assets";
import styles from "../ui/Home.module.css";

import { ReactNode } from "react";

export const CARD_INDEX_TO_IMAGE_MAP: Record<number, string> = {
  1: "src/shared/assets/images/waterBlockBg.jpg",
  3: "src/shared/assets/images/engineeringBlockBg.jpg",
  6: "src/shared/assets/images/electroBlockBg.jpg",
  8: "src/shared/assets/images/heatBlockBg.jpg",
  9: "src/shared/assets/images/coolingBlockBg.jpg",
  11: "src/shared/assets/images/fireAlarmBlockBg.jpg",
  14: "src/shared/assets/images/cleaningBlockBg.jpg",
  16: "src/shared/assets/images/automaticBlockBg.jpg",
};

export const CARD_INDEX_TO_ICON_MAP: Record<number, ReactNode> = {
  1: <EngineeringBlockIcon className={styles.iconCard} />,
  3: <WaterBlockIcon className={styles.iconCard} />,
  6: <ElectroBlockIcon className={styles.iconCard} />,
  8: <HeatBlockIcon className={styles.iconCard} />,
  9: <CoolingBlockIcon className={styles.iconCard} />,
  11: <FireAlarmBlockIcon className={styles.iconCard} />,
  14: <CleaningBlockIcon className={styles.iconCard} />,
  16: <AutomaticBlockIcon className={styles.iconCard} />,
};

export const CERTIFICATES_MAP = [
  { id: 1, src: "src/shared/assets/images/certificate1.jpg" },
  { id: 2, src: "src/shared/assets/images/certificate2.jpg" },
  { id: 3, src: "src/shared/assets/images/certificate3.jpg" },
  { id: 4, src: "src/shared/assets/images/certificate4.jpg" },
  { id: 5, src: "src/shared/assets/images/certificate5.jpg" },
  { id: 6, src: "src/shared/assets/images/certificate6.jpg" },
  { id: 7, src: "src/shared/assets/images/certificate7.jpg" },
  { id: 8, src: "src/shared/assets/images/certificate8.jpg" },
  { id: 9, src: "src/shared/assets/images/certificate9.jpg" },
  { id: 10, src: "src/shared/assets/images/certificate10.jpg" },
  { id: 11, src: "src/shared/assets/images/certificate11.jpg" },
  { id: 12, src: "src/shared/assets/images/certificate12.jpg" },
];

export const CLIENTS_MAP = [
  { id: 1, src: "src/shared/assets/images/client1.png" },
  { id: 2, src: "src/shared/assets/images/client2.png" },
  { id: 3, src: "src/shared/assets/images/client3.png" },
  { id: 4, src: "src/shared/assets/images/client4.png" },
  { id: 5, src: "src/shared/assets/images/client5.png" },
  { id: 6, src: "src/shared/assets/images/client6.png" },
  { id: 7, src: "src/shared/assets/images/client7.png" },
  { id: 8, src: "src/shared/assets/images/client8.png" },
  { id: 9, src: "src/shared/assets/images/client9.png" },
  { id: 10, src: "src/shared/assets/images/client10.png" },
  { id: 11, src: "src/shared/assets/images/client11.png" },
  { id: 12, src: "src/shared/assets/images/client12.png" },
  { id: 13, src: "src/shared/assets/images/client13.png" },
  { id: 14, src: "src/shared/assets/images/client14.png" },
  { id: 15, src: "src/shared/assets/images/client15.png" },
  { id: 16, src: "src/shared/assets/images/client16.png" },
  { id: 17, src: "src/shared/assets/images/client17.png" },
  { id: 18, src: "src/shared/assets/images/client18.png" },
];