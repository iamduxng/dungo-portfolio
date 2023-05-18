import { useState } from 'react'
import { CERTIFICATES } from '~/utils/data'
import Headline from '~/components/Common/Headline'

import styles from './CertificateList.module.css'

interface CERTIFICATE {
  name: string
  badge: string
  certificate: string
}

type Props = {
  classes: string
}

function CertificateList({ classes }: Props) {
  const [selectedCertificate, setSelectedCertificate] = useState(
    CERTIFICATES[0].certificate
  )

  return (
    <div className={`${styles.certificateList} ${classes}`}>
      <div className={styles.badges}>
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
      </div>

      <div className={styles.certificate}>
        {selectedCertificate ? (
          <img src={selectedCertificate} className="h-auto w-full" />
        ) : (
          <div className={styles.commingSoon}>
            <Headline tag="h3" classes={styles.commingSoonText}>
              Comming soon
            </Headline>
          </div>
        )}
      </div>
    </div>
  )
}

export default CertificateList
