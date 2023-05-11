import { TRAVEL } from '~/utils/data'
import Album from '~/components/Travel/Album'

import styles from './Travel.module.css'
import Headline from '~/components/Common/Headline'
import Animate from '~/components/Animate'
import { ANIMATION_TYPE } from '~/components/Animate'

function Travel() {
  return (
    <div className="">
      <Headline classes="text-white">Travel</Headline>
      <div className="max-w-screen-sm text-white">
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
      <Animate type={ANIMATION_TYPE.FROM_RIGHT}>
        <img className="ml-auto" src="memojis/travel.png" />
      </Animate>
    </div>
  )
}

export default Travel
