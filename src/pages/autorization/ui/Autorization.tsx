import { Footer, Header } from "@pages/home";
import styles from "./Autorization.module.css";
import { SectionTitle } from "@widgets/sectionTitle";

export const Autorization = () => {
  return (
    <div className={styles.container}>
      <Header isFixed={false} />
      <SectionTitle text="Авторизуйтесь" />
      <div className={styles.mainContent}>
        <form className={styles.form}>
          <p className={styles.textEnterInfo}>
            Введите e-mail и пароль для входа на сайт
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};
