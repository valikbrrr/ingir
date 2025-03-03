import styles from "./Slider.module.css";
import { JSX, useEffect, useState } from "react";

interface SliderProps {
  dataMap: () => JSX.Element[];
  isCertificates: boolean;
  offsetNum: number;
  totalPages: number;
  onCertificateClick?: (src: string) => void; // Функция для обработки клика по сертификату
  selectedCertificate?: string | null; // Выбранный сертификат
  isLoading?: boolean; // Состояние загрузки
  onCloseModal?: () => void; // Функция для закрытия модального окна
}

export const Slider: React.FC<SliderProps> = ({
  dataMap,
  isCertificates,
  offsetNum,
  totalPages,
  selectedCertificate,
  isLoading,
  onCloseModal,
}) => {
  const [currentCertificatePage, setCurrentCertificatePage] = useState(0);
  const [currentClientPage, setCurrentClientPage] = useState(0);

  const handlePageChange = (page: number) => {
    isCertificates
      ? setCurrentCertificatePage(page)
      : setCurrentClientPage(page);
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
      {/* Модальное окно для сертификатов */}
      {selectedCertificate && (
        <div className={styles.modalOverlay} onClick={onCloseModal}>
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
