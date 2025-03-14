import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section
      className={styles.hero}
    >
      <div className={styles.contentWrapper}>
        <div className="">
          <h3>Хотите оставить заявку?</h3>
        </div>
        <p>Войдите в личный кабинет или зарегистрируйтесь</p>
        <button>перейти</button>
      </div>
    </section>
  );
};
