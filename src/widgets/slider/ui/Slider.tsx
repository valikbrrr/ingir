import styles from "./Slider.module.css";
import { CERTIFICATES_MAP, CLIENTS_MAP } from "@pages/home";
import { useEffect, useState } from "react";

interface SliderProps {
  isCertificates: boolean;
  offsetNum: number;
  totalPages: number;
}

export const Slider: React.FC<SliderProps> = ({
  dataMap
  isCertificates,
  offsetNum,
  totalPages,
}) => {
    
  // ????????????????? =>
  let isClients;
  isCertificates || (isClients = true);

  const [currentCertificatePage, setCurrentCertificatePage] = useState(0);
  const [currentClientPage, setCurrentClientPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );

  const handlePageChange = (page: number) => {
    isCertificates
      ? setCurrentCertificatePage(page)
      : setCurrentClientPage(page);
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
    const interval = setInterval(() => {
      setCurrentClientPage((prevPage) => {
        const nextPage = prevPage + 1;
        return nextPage < totalPages ? nextPage : 0;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const offset =
    (isCertificates ? -currentCertificatePage : -currentClientPage) * offsetNum;

  let currentPage = isCertificates ? currentCertificatePage : currentClientPage;

  return (
    <div className={styles.slider}>
      <div
        className={styles.Container}
        style={{
          transform: `translateX(${offset}%)`,
        }}
      >
        {dataMap()}
        {isCertificates
          ? CERTIFICATES_MAP.map((certificate) => (
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
          : CLIENTS_MAP.map((client) => (
              <div key={client.id} className={styles.blockClient}>
                <img
                  src={client.src}
                  alt={`Клиент ${client.id}`}
                  className={styles.clientImage}
                />
              </div>
            ))}
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentPage === index ? styles.active : ""
            }`}
            onClick={() => handlePageChange(index)}
          />
        ))}
      </div>
      {selectedCertificate && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading ? (
              <div className={styles.loader}>Загрузка...</div>
            ) : (
              <img
                src={selectedCertificate}
                alt="Увеличенный сертификат"
                className={styles.modalImage}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
