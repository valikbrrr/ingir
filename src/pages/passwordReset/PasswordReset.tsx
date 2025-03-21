import { Footer, Header } from "@pages/home";
import styles from "./PasswordReset.module.css";
import { SectionTitle } from "@widgets/sectionTitle";

export const PasswordReset = () => {
  return (
    <div className={styles.container}>
      <Header isFixed={false} />
      <SectionTitle text="Сбросить ваш пароль" />
      <div className={styles.mainContent}>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
            />
          </div>
          <p className={styles.textInstructions}>
            Инструкция по сбросу пароля будет отправлена на ваш
            зарегистрированный email-адрес.
          </p>
          <button type="submit" className={styles.submitButton}>
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
