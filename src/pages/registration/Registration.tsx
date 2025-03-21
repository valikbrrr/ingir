import { Footer, Header } from "@pages/home";
import styles from "./Registration.module.css";
import { SectionTitle } from "@widgets/sectionTitle";
import { Facebook, Google, Linkedin } from "@shared/assets";

export const Registration = () => {
  return (
    <div className={styles.container}>
      <Header isFixed={false} />
      <SectionTitle text="Зарегистрироваться" />
      <div className={styles.mainContent}>
        <form className={styles.form}>
          <div className={styles.providersBlock}>
            <div className={styles.block}>
              <Facebook />
              <p>Facebook</p>
            </div>
            <div className={styles.block}>
              <Google />
              <p>Google</p>
            </div>
            <div className={styles.block}>
              <Linkedin />
              <p>Linkedin</p>
            </div>
          </div>
          <p className={styles.securedText}>
            Secured by{" "}
            <span className="company-service">
              OneAll{" "}
              <a href="https://www.oneall.com/services/social-network-integration/social-login/#utm.social-login.engirby">
                Social Login
              </a>
            </span>
          </p>
          <p className={styles.textFillOutForm}>
            Заполните форму для подачи заявки на регистрацию
          </p>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Ваше имя"
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Email"
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="organization"
              name="organization"
              required
              placeholder="Название организации"
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Телефон"
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Зарегистрироваться
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
