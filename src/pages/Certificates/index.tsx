import CertificateList from '~/components/CertificateList'
import Headline from '~/components/Common/Headline'

function Certificates() {
  return (
    <div>
      <Headline>Certificates</Headline>
      <div className="max-w-screen-sm">
        Human beings need certificates of education, but knowledge needs no
        certification.
      </div>

      <CertificateList classes="mt-20" />
    </div>
  )
}

export default Certificates
