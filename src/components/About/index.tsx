import { useResponsive } from 'ahooks'
import { HOBBIES } from '~/utils/data'
import Moon from '~/components/Memoji/Moon'
import HobbyItem from '~/components/About/HobbyItem'

import styles from './About.module.css'
import Animate, { ANIMATION_TYPE } from '~/components/Animate'
import Sports from './Sports'

type Props = {
  classes: string
}

function About({ classes }: Props) {
  const [sport, travel, game] = HOBBIES
  const responsive = useResponsive()

  return (
    <div className={`${styles.about} ${classes}`}>
      <div className="absolute bottom-0 -left-8">
        <Moon />
      </div>

      <div className={styles.hobbiesList}>
        <Sports hobby={sport} />
        <Animate type={ANIMATION_TYPE.FROM_TOP} classes={styles.hobbyItem}>
          <HobbyItem hobby={travel} />
        </Animate>
        <Animate
          type={ANIMATION_TYPE.FROM_RIGHT}
          style={
            responsive.md
              ? ({ '--toX': '-20%', '--toY': '52%' } as React.CSSProperties)
              : {}
          }
          classes={styles.hobbyItem}
        >
          <HobbyItem hobby={game} />
        </Animate>
      </div>
    </div>
  )
}

export default About
