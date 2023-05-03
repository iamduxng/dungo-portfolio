import { useState } from 'react'
import { groupBy } from 'lodash'
import { SKILLS, SKILL_GIFS } from '~/utils/data'
import Headline from '~/components/Common/Headline'
import SkillItem, { SKILL } from '~/components/Skills/SkillItem'

import styles from './Skills.module.css'

const skillGroups = groupBy(SKILLS, (skill: SKILL) => skill.type)

function Skills() {
  const [openingType, setOpeningType] = useState('')

  const handleOpen = (type: string) => setOpeningType(type)

  return (
    <div className="">
      <Headline>Skills</Headline>
      <div className="max-w-screen-sm">
        If my career was a game, my technical skills would be my power,
        abilities and weapon.
      </div>

      <div className={styles.skillsGrid}>
        {Object.entries(skillGroups).map(([key, value], idx) => (
          <SkillItem
            key={key}
            name={key}
            gif={SKILL_GIFS[idx]}
            skills={value}
            isOpened={openingType === key}
            handleOpen={() => handleOpen(key)}
          />
        ))}
      </div>
    </div>
  )
}

export default Skills
