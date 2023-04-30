import { HOBBIES } from '~/utils/data'
import Moon from '~/components/Memoji/Moon'
import HobbyItem from '~/components/About/HobbyItem'
import Animate, { ANIMATION_TYPE } from '~/components/Animate'
import Sports from '~/components/About/Sports'
import Games from '~/components/About/Games'

import styles from './About.module.css'

type Props = {
  classes: string
}

function About({ classes }: Props) {
  const [sport, travel, game] = HOBBIES

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
        <Games hobby={game} />
      </div>
    </div>
  )
}

export default About
