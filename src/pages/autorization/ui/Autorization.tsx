import { Footer, Header } from "@pages/home";
import styles from "./Autorization.module.css";
import { SectionTitle } from "@widgets/sectionTitle";

export const Autorization = () => {
  return (
    <div className={styles.container}>
      <Header isFixed={false}/>
      <SectionTitle text="Авторизация" />
      <div className={styles.mainContent}>Autorization</div>
      <Footer />
    </div>
  );
};
