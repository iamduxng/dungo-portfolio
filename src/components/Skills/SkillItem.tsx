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
      <FlipCardContent
        front={
          <>
            <Headline tag="h3" classes="uppercase">
              {name}
            </Headline>
            <div>
              <img src={`/gifs/${gif}`} />
            </div>
          </>
        }
        back={<>Back</>}
      />
    </div>
  )
}

export default SkillItem
