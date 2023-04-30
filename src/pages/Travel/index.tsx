import { TRAVEL } from '~/utils/data'
import Album from '~/components/Travel/Album'

import styles from './Travel.module.css'
import Headline from '~/components/Common/Headline'

function Travel() {
  return (
    <div className="">
      <Headline classes="text-white">Travel</Headline>
      <div className="text-white">
        I love to travel, exploring new things, meeting with new people, You can
        call me a travel bug. Travel is my therapy.
      </div>
      <div className={styles.albumsGrid}>
        {TRAVEL.map((album, idx) => (
          <div key={`album-${idx}`} className={styles.albumWrapper}>
            <Album album={album} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Travel
