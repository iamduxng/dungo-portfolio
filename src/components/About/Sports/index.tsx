import { useState } from 'react'
import { useResponsive } from 'ahooks'
import MyModal from '~/components/Modal'
import Animate, { ANIMATION_TYPE } from '~/components/Animate'
import HobbyItem, { HOBBY } from '~/components/About/HobbyItem'

import aboutStyles from '~/components/About/About.module.css'
import styles from './Sport.module.css'

import {
  IconBicycle,
  IconClimbing,
  IconGym,
  IconJumpingRope,
  IconRun,
  IconSurfing,
  IconSwim
} from '~/components/Icons'

const SPORTS = [
  [{ icon: IconJumpingRope }],
  [{ icon: IconRun }, { icon: IconBicycle }],
  [{ icon: IconGym }],
  [{ icon: IconSwim }, { icon: IconSurfing }],
  [{ icon: IconClimbing }]
]

type Props = {
  hobby: HOBBY
}

function Sports({ hobby }: Props) {
  const [isOpened, setIsOpened] = useState(false)

  const responsive = useResponsive()

  const openDetails = () => setIsOpened(true)
  const closeDetails = () => setIsOpened(false)

  return (
    <>
      <MyModal
        isOpen={isOpened}
        onRequestClose={closeDetails}
        headline="My Favourite Sports"
      >
        <div className="relative w-full">
          <div className={styles.modalSportsBackground} />
          {SPORTS.map((groupSport, groupIdx) => (
            <div
              key={`group-sport-${groupIdx}`}
              className={styles.modalSportsRow}
            >
              {groupSport.map((sport, sportIdx) => (
                <div
                  key={`sport-${sportIdx}`}
                  className={styles.modalSportsCol}
                >
                  <div className={styles.modalSportsIcon}>
                    <sport.icon size={40} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </MyModal>
      <Animate
        type={ANIMATION_TYPE.FROM_LEFT}
        style={
          responsive.md
            ? ({ '--toX': '20%', '--toY': '52%' } as React.CSSProperties)
            : {}
        }
        classes={aboutStyles.hobbyItem}
      >
        <HobbyItem hobby={hobby} onClick={openDetails} />
      </Animate>
    </>
  )
}

export default Sports
