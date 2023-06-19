import { useState } from 'react'
import { CERTIFICATES } from '~/utils/data'
import Headline from '~/components/Common/Headline'
import Carousel from '~/components/Carousel'
import MyModal from '~/components/Modal'
import Button from '~/components/Common/Button'
import { IconSpace } from '~/components/Icons'

import styles from './Certificate.module.css'

interface CERTIFICATE {
  name: string
  badge: string
  certificate: string
}

type ArrowProps = {
  variant: string
  onClick?: () => void
}

function CertificateaArrow({ variant, onClick }: ArrowProps) {
  const isNextArrow = variant === 'next'
  const arrowClasses = isNextArrow ? 'right-1' : 'left-1'
  const iconClasses = isNextArrow ? '' : 'rotate-180'
  return (
    <div className={`${styles.arrow} ${arrowClasses}`} onClick={onClick}>
      <IconSpace size="1.5rem" className={`text-white ${iconClasses}`} />
    </div>
  )
}

function Certificate() {
  const [isOpened, setIsOpened] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState(
    CERTIFICATES[0].certificate
  )

  const certificateSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    nextArrow: <CertificateaArrow variant="next" />,
    prevArrow: <CertificateaArrow variant="prev" />
  }

  const openDetails = () => setIsOpened(true)
  const closeDetails = () => setIsOpened(false)

  return (
    <>
      <MyModal isOpen={isOpened} onRequestClose={closeDetails}>
        <div className={styles.certificate}>
          <div className={styles.badges}>
            <Carousel settings={certificateSettings}>
              {CERTIFICATES.map((certificate, idx) => (
                <div
                  key={`badge-${idx}`}
                  className={styles.badge}
                  onClick={() =>
                    setSelectedCertificate(certificate.certificate)
                  }
                >
                  <img src={certificate.badge} />
                  <div className={styles.badgeName}>{certificate.name}</div>
                </div>
              ))}
            </Carousel>
          </div>

          <div>
            {selectedCertificate ? (
              <img
                src={selectedCertificate}
                className="mx-auto h-full w-auto"
              />
            ) : (
              <div className={styles.commingSoon}>
                <Headline tag="h3" classes={styles.commingSoonText}>
                  Comming soon
                </Headline>
              </div>
            )}
          </div>
        </div>
      </MyModal>

      <Button className={styles.certificateBtn} onClick={openDetails}>
        Show more
      </Button>
    </>
  )
}

export default Certificate
