import { Footer, Header } from "@pages/home";
import styles from "./Autorization.module.css";

export const Autorization = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mainContent}>Autorization</div>
      <Footer />
    </div>
  );
};
