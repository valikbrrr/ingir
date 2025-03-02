import {
  bgFooter,
  bgHeader,
  bgHero,
  PresentationBack,
} from "@shared/assets/images";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import {
  ArrowTop,
  EngirLogo,
  InstagramIcon,
  LinkedinIcon,
  LogIcon,
  PhoneIcon,
  PresentationIcon,
  RequestIcon,
  StafIcon,
  UniformOrderIcon,
} from "@shared/assets/icon";
import {
  CARD_INDEX_TO_ICON_MAP,
  CARD_INDEX_TO_IMAGE_MAP,
  CERTIFICATES_MAP,
  CLIENTS_MAP,
} from "../model/Home.const";
import { contentBlocks } from "../model/types";
import { Slider } from "@widgets/slider";

export const Home = () => {
  const blocksPerPageCertificates = 4;
  const totalPagesCertificates = Math.ceil(
    CERTIFICATES_MAP.length / blocksPerPageCertificates
  );

  const blocksPerPageClients = 1;
  const totalPagesClients = Math.ceil(
    CLIENTS_MAP.length / blocksPerPageClients - 4
  );

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const scrollThresholdHeader = 200;
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const scrollThresholdScrollTop = 400;

  const handleScrollForHeader = () => {
    const scrollY = window.scrollY;

    if (scrollY > scrollThresholdHeader) {
      setIsHeaderVisible(true);
    } else {
      setIsHeaderVisible(false);
    }
  };

  const handleScrollForScrollTop = () => {
    const scrollY = window.scrollY;

    if (scrollY > scrollThresholdScrollTop) {
      setIsScrollTopVisible(true);
    } else {
      setIsScrollTopVisible(false);
    }
  };

  const moveUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollForHeader);
    return () => {
      window.removeEventListener("scroll", handleScrollForHeader);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollForScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollForScrollTop);
    };
  }, []);

  return (
    <div className={styles.container}>
      {isScrollTopVisible ? (
        <button className={styles.scrollTop} onClick={moveUp}>
          <ArrowTop />
        </button>
      ) : (
        ""
      )}
      <header
        className={styles.headerFixed}
        style={{
          backgroundImage: isHeaderVisible ? `url(${bgHeader})` : "none",
          transition: "opacity 0.5s",
        }}
      >
        <div className={styles.contentWrapper}>
          <div className={styles.leftContent}>
            <EngirLogo />
            <a href="tel: +375 (17) 388 06 75" className={styles.phoneNumber}>
              +375 (17) 388 06 75
            </a>
            <p>220088, г. Минск, ул. Андреевская, д. 4А</p>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.changeLang}>
              <a href="" className={styles.russianLang}>
                RU
              </a>
              <a href="" className={styles.englishLang}>
                EN
              </a>
            </div>
            <a href="" className={styles.enter}>
              <LogIcon />
              <p>вход</p>
            </a>
          </div>
        </div>
      </header>
      <section
        className={styles.hero}
        style={{
          backgroundImage: `url(${bgHero})`,
        }}
      >
        <div className={styles.contentWrapper}>
          <div className="">
            <h3>Хотите оставить заявку?</h3>
          </div>
          <p>Войдите в личный кабинет или зарегистрируйтесь</p>
          <button>перейти</button>
        </div>
      </section>
      <section className={styles.ourServices}>
        <div className={styles.sectionTitle}>
          <h2>Наши услуги</h2>
        </div>
        <div className={styles.cardsWrap}>
          {contentBlocks.map((block, index) => (
            <div key={index} className={styles.card}>
              {block.type === "image" ? (
                (() => {
                  const icon = Object.keys(CARD_INDEX_TO_ICON_MAP).includes(
                    String(block.id)
                  );

                  const images = Object.keys(CARD_INDEX_TO_IMAGE_MAP).includes(
                    String(block.id)
                  );

                  return (
                    <div
                      className={styles.imageBlock}
                      style={{
                        backgroundImage: `url(${
                          images ? CARD_INDEX_TO_IMAGE_MAP[block.id] : ""
                        })`,
                      }}
                    >
                      {icon && CARD_INDEX_TO_ICON_MAP[block.id]}
                    </div>
                  );
                })()
              ) : (
                <div className={styles.textCard}>
                  <h3>{block.text}</h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className={styles.description}>
        <article className={styles.articleBlock}>
          <h2>О компании</h2>
          <p>
            Наша команда имеет более чем 5-летний опыт работы в сфере
            обслуживания объектов недвижимости. Основной целью{" "}
            <b>ООО «Инжир»</b> является увеличение потенциальной стоимости
            имущества и эксплуатация объекта с максимальной эффективностью.
          </p>
          <p>
            В настоящее время мы обслуживаем более 30 000 м2 коммерческих,
            производственных и офисных помещений. ООО «Инжир» обладает широким
            спектром компетенций, включая опыт в области обслуживания сетей и
            систем, а так же оказания услуг, упомянутых ниже:
          </p>
          <ul>
            <li>
              Системы вентиляции и кондиционирования, обслуживание систем
              отпуска;
            </li>
            <li>
              Сети теплоснабжения, водоснабжения, водоотведения и отопления;
            </li>
            <li>Системы электроснабжения зданий;</li>
            <li>
              Системы автоматической пожарной сигнализации и оповещения и
              управления эвакуацией зданий;
            </li>
            <li>Низковольтные системы и установки, молниезащита;</li>
            <li>Ремонтно-строительные работы;</li>
            <li>Управление строительными проектами;</li>
            <li>Клининговые услуги;</li>
            <li>Аутстаффинг.</li>
          </ul>
          <p>
            <b>Команда ООО «Инжир»</b> состоит из отраслевых экспертов, включая
            профессиональных администраторов и инженеров по управлению
            объектами, опытных администраторов по управлению системами,
            квалифицированных специалистов по обслуживанию систем и обученный
            клининговый персонал. Наши специалисты помимо опыта работы имеют
            соответствующую подготовку и аттестацию, подтверждающую их
            квалификацию для работы с большинством типов строительных систем,
            выполнения большинства ежедневных ремонтных работ и предоставления
            услуг по управлению проектами на этапах проектирования,
            строительства и ввода в эксплуатацию.
          </p>
        </article>
      </section>
      <section className={styles.ourAdvantages}>
        <div className={styles.ourAdvantagesTitle}>
          <h2>Наши преимущества</h2>
        </div>
        <div className={styles.ourAdvantagesCards}>
          <div className={styles.card}>
            <div className={styles.advantagesIconBlock}>
              <StafIcon />
            </div>
            <div className={styles.advantagesTextBlock}>
              Квалифицированный
              <br /> персонал
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.advantagesIconBlock}>
              <RequestIcon />
            </div>
            <div className={styles.advantagesTextBlock}>
              Онлайн подача
              <br /> заявок 24/7
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.advantagesIconBlock}>
              <UniformOrderIcon />
            </div>
            <div className={styles.advantagesTextBlock}>
              Единый
              <br /> подрядчик
            </div>
          </div>
        </div>
      </section>
      <section className={styles.presentationAndContact}>
        <div
          className={styles.presentationBlock}
          style={{
            backgroundImage: `url(${PresentationBack})`,
          }}
        >
          <h2>Ознакомьтесь с нашей презентацией</h2>
          <a href="" className={styles.presentationLink}>
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
                  placeholder="Загрузить файл"
                />
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
      {/* СЕРТИФИКАТЫ */}
      <section className={styles.certificates}>
        <div className={styles.certificatesTitle}>
          <h2>Сертификаты</h2>
        </div>
        <Slider
          isCertificates={true}
          offsetNum={100}
          totalPages={totalPagesCertificates}
        />
      </section>
      {/* КЛИЕНТЫ */}
      <section className={styles.ourClients}>
        <div className={styles.ourClientsTitle}>
          <h2>Наши клиенты</h2>
        </div>
        <Slider
          isCertificates={false}
          offsetNum={20}
          totalPages={totalPagesClients}
        />
      </section>
      <footer
        className={styles.footer}
        style={{
          backgroundImage: `url(${bgFooter})`,
        }}
      >
        <div className={styles.footerTop}>
          <div className={styles.logoBlock}>
            <EngirLogo />
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.infoBlock1}>
              <div className={styles.phoneNumberBlock}>
                <a
                  href="tel: +375 (17) 388 06 75"
                  className={styles.phoneNumber}
                >
                  +375 (17) 388 06 75
                </a>
                <PhoneIcon />
              </div>
              <p className={styles.adress}>
                220088, г. Минск, ул. Андреевская, д. 4А
              </p>
              <div className={styles.emailBlock}>
                <p>Email:</p>
                <a href="email: info@engir.by">info@engir.by</a>
              </div>
            </div>
            <div className={styles.infoBlock2}>
              <p>
                УНП: 192562702 220088, <br /> г. Минск, ул. Андреевская, д. 4А
              </p>
            </div>
            <div className={styles.infoBlock3}>
              <a
                href="https://www.linkedin.com/company/27218226/"
                className={styles.linkedinBlock}
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://www.instagram.com/engir.by/"
                className={styles.instagramBlock}
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};
