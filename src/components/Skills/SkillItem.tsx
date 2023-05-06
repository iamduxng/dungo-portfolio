import FlipCardContent from '~/components/Common/FlipCardContent'
import Headline from '~/components/Common/Headline'

import styles from './SkillItem.module.css'

export interface SKILL {
  icon: string
  name: string
  level: number
  type: string
}

type Props = {
  name: string
  gif: string
  skills: Array<SKILL>
  isOpened: boolean
  handleOpen: () => void
}

function SkillItem({ name, gif, skills, isOpened, handleOpen }: Props) {
  return (
    <div
      className={`${styles.skillItem} ${
        isOpened ? styles.skillItemOpened : ''
      }`}
      onClick={handleOpen}
    >
      <div className={styles.skillGifWrapper}>
        <div
          className={styles.skillGif}
          style={
            {
              '--staticBg': `url(/statics/${gif}.jpg)`,
              '--gifBg': `url(/gifs/${gif}.gif)`
            } as React.CSSProperties
          }
        />
      </div>

      <Headline tag="h3" classes={styles.skillHeadline}>
        {name}
      </Headline>
    </div>
  )
}

export default SkillItem
