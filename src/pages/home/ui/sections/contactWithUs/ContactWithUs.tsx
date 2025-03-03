import { PresentationBack, PresentationIcon, UploadIcon } from "@shared/assets";
import styles from "./ContactWithUs.module.css";

export const ContactWithUs = () => {
  return (
    <section className={styles.ContactWithUs}>
      <div
        className={styles.presentationBlock}
        style={{
          backgroundImage: `url(${PresentationBack})`,
        }}
      >
        <h2>Ознакомьтесь с нашей презентацией</h2>
        <a
          href="https://engir.by/sites/default/files/2020-09/engir_f4_less-color2.pdf"
          className={styles.presentationLink}
        >
          <div className={styles.presentationWrap}>
            <PresentationIcon />
            <p>Presentation</p>
          </div>
        </a>
        <p className={styles.fileWeight}>(2.2 МБ)</p>
      </div>
      <div className={styles.contactSection}>
        <h2>Свяжитесь с нами</h2>
        <p className={styles.contactDescription}>
          Заполните форму, и мы подготовим для вас предварительный расчет в
          течение дня.
        </p>
        <form className={styles.contactForm}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Имя"
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="E-mail"
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Телефон"
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="file"
                id="file"
                name="file"
                className={styles.fileInput}
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    console.log("Выбран файл:", e.target.files[0].name);
                  }
                }}
              />
              <label htmlFor="file" className={styles.fileLabel}>
                <UploadIcon />
                <span>Загрузить файл</span>
              </label>
            </div>
          </div>
          <div className={styles.formGroup}>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Ваше сообщение"
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
    </section>
  );
};
