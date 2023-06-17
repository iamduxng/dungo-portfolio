import CertificateList from '~/components/CertificateList'
import Headline from '~/components/Common/Headline'

function Certificates() {
  return (
    <div className="h-full gap-8 md:grid md:grid-cols-3">
      <div className="">
        <Headline>Certificates</Headline>
        <div className="max-w-screen-sm">
          Human beings need certificates of education, but knowledge needs no
          certification.
        </div>
      </div>

      <CertificateList classes="mt-16 md:mt-0 md:col-span-2" />
    </div>
  )
}

export default Certificates
