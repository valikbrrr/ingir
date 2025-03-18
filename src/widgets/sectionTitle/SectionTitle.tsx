import styles from "./SectionTitle.module.css"

interface SectionTitleProps {
    text: string; 
  }

export const SectionTitle: React.FC<SectionTitleProps> = ({text}) => {
  return (
    <div className={styles.blockTitle}>
      <h2>{text}</h2>
    </div>
  );
};
