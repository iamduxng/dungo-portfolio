import FlipCardContent from '~/components/Common/FlipCardContent'

import styles from './SkillItem.module.css'

export interface SKILL {
  icon: string
  name: string
  level: number
  type: string
}

type Props = {
  name: string
  skills: Array<SKILL>
  isOpened: boolean
  handleOpen: () => void
}

function SkillItem({ name, skills, isOpened, handleOpen }: Props) {
  return (
    <div
      className={`${styles.skillItem} ${
        isOpened ? styles.skillItemOpened : ''
      }`}
      onClick={handleOpen}
    >
      <FlipCardContent front={<>{name}</>} back={<>Back</>} />
    </div>
  )
}

export default SkillItem
