import { Footer, Header } from "@pages/home";
import styles from "./Autorization.module.css";
import { SectionTitle } from "@widgets/sectionTitle";
import { Facebook, Google, Linkedin } from "@shared/assets";
import { useNavigate } from "react-router-dom";

export const Autorization = () => {
  const navigate = useNavigate();

  const toPasswordReset = () => {
    navigate("/password-reset");
  };
  const toRegistration = () => {
    navigate("/registration");
  };

  return (
    <div className={styles.container}>
      <Header isFixed={false} />
      <SectionTitle text="Авторизуйтесь" />
      <div className={styles.mainContent}>
        <form className={styles.form}>
          <p className={styles.textEnterInfo}>
            Введите e-mail и пароль для входа на сайт
          </p>
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
              type="password"
              id="password"
              className="password-input"
              placeholder="Пароль"
              required
            ></input>
          </div>
          <button type="submit" className={styles.submitButton}>
            ОТПРАВИТЬ
          </button>
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
        </form>
        <div className={styles.helpBlock}>
          <a
            href="#"
            className={styles.fogotPassword}
            onClick={toPasswordReset}
          >
            Забыли пароль?
          </a>
          <a href="#" className={styles.register} onClick={toRegistration}>
            Зарегистрироваться
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};
