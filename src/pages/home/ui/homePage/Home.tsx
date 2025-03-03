import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { ArrowTop } from "@shared/assets/icon";
import { CERTIFICATES_MAP, CLIENTS_MAP } from "./Home.const";
import {
  ContactWithUs,
  Description,
  Footer,
  Header,
  Hero,
  OurAdvantages,
  OurServices,
} from "../sections";
import { Slider } from "@widgets/slider";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );

  const blocksPerPageCertificates = 4;
  const totalPagesCertificates = Math.ceil(
    CERTIFICATES_MAP.length / blocksPerPageCertificates
  );

  const blocksPerPageClients = 1;
  const totalPagesClients = Math.ceil(
    CLIENTS_MAP.length / blocksPerPageClients - 4
  );

  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const scrollThresholdScrollTop = 400;

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

  const handleCertificateClick = (src: string) => {
    setIsLoading(true);
    setSelectedCertificate(src);

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
    };
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollForScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollForScrollTop);
    };
  }, []);

  return (
    <div className={styles.container}>
      {isScrollTopVisible && (
        <button className={styles.scrollTop} onClick={moveUp}>
          <ArrowTop />
        </button>
      )}
      <Header />
      <Hero />
      <OurServices />
      <Description />
      <OurAdvantages />
      <ContactWithUs />
      {/* СЕРТИФИКАТЫ */}
      <section className={styles.certificates}>
        <div className={styles.certificatesTitle}>
          <h2>Сертификаты</h2>
        </div>
        <Slider
          dataMap={() =>
            CERTIFICATES_MAP.map((certificate) => (
              <div
                key={certificate.id}
                className={styles.certificateBlock}
                onClick={() => handleCertificateClick(certificate.src)}
              >
                <img
                  src={certificate.src}
                  alt={`Сертификат ${certificate.id}`}
                  className={styles.certificateImage}
                />
              </div>
            ))
          }
          isCertificates={true}
          offsetNum={100}
          totalPages={totalPagesCertificates}
          selectedCertificate={selectedCertificate}
          isLoading={isLoading}
          onCloseModal={closeModal}
        />
      </section>
      {/* КЛИЕНТЫ */}
      <section className={styles.ourClients}>
        <div className={styles.ourClientsTitle}>
          <h2>Наши клиенты</h2>
        </div>
        <Slider
          dataMap={() =>
            CLIENTS_MAP.map((client) => (
              <div key={client.id} className={styles.blockClient}>
                <img
                  src={client.src}
                  alt={`Клиент ${client.id}`}
                  className={styles.clientImage}
                />
              </div>
            ))
          }
          isCertificates={false}
          offsetNum={20}
          totalPages={totalPagesClients}
        />
      </section>
      <Footer />
    </div>
  );
};
