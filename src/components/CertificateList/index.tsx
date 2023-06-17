import { useState } from 'react'
import { CERTIFICATES } from '~/utils/data'
import Headline from '~/components/Common/Headline'
import Carousel from '~/components/Carousel'
import { IconSpace } from '~/components/Icons'

import styles from './CertificateList.module.css'

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

type Props = {
  classes?: string
}

function CertificateList({ classes }: Props) {
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

  return (
    <div className={`${styles.certificateList} ${classes}`}>
      <div className={styles.badges}>
        <Carousel settings={certificateSettings}>
          {CERTIFICATES.map((certificate, idx) => (
            <div
              key={`badge-${idx}`}
              className={styles.badge}
              onClick={() => setSelectedCertificate(certificate.certificate)}
            >
              <img src={certificate.badge} />
              <div className={styles.badgeName}>{certificate.name}</div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* <div className={styles.certificate}>
        {selectedCertificate ? (
          <img src={selectedCertificate} className="mx-auto h-full w-auto" />
        ) : (
          <div className={styles.commingSoon}>
            <Headline tag="h3" classes={styles.commingSoonText}>
              Comming soon
            </Headline>
          </div>
        )}
      </div> */}
    </div>
  )
}

export default CertificateList
