import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import styles from "./Slider.module.css";
import { JSX } from "react";

interface SliderProps {
  dataMap: () => JSX.Element[];
  isCertificates: boolean;
  totalPages: number;
  onCertificateClick?: (src: string) => void;
  selectedCertificate?: string | null;
  isLoading?: boolean;
  onCloseModal?: () => void;
}

export const Slider: React.FC<SliderProps> = ({
  dataMap,
  isCertificates,
  selectedCertificate,
  isLoading,
  onCloseModal,
}) => {
  return (
    <div className={styles.slider}>
      <Swiper
        slidesPerView={isCertificates ? 4 : 5}
        slidesPerGroup={isCertificates ? 4 : 1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        autoplay={
          isCertificates
            ? false
            : {
                disableOnInteraction: false,
              }
        }
        modules={[Pagination, Autoplay]}
        className={styles.swiperContainer}
      >
        {dataMap().map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>

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
