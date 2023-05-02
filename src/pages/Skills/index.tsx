import { useState } from 'react'
import { groupBy } from 'lodash'
import { SKILLS } from '~/utils/data'
import Headline from '~/components/Common/Headline'
import SkillItem, { SKILL } from '~/components/Skills/SkillItem'

import styles from './Skills.module.css'

const skillGroups = groupBy(SKILLS, (skill: SKILL) => skill.type)

Object.entries(skillGroups).map(([key, value]) => console.log(value))

function Skills() {
  const [openingType, setOpeningType] = useState('')

  const handleOpen = (type: string) => setOpeningType(type)

  return (
    <div className="">
      <Headline classes="text-white">Skills</Headline>
      <div className="max-w-screen-sm text-white">
        If my career was a game, my technical skills would be my power,
        abilities and weapon.
      </div>

      <div className={styles.skillsGrid}>
        {Object.entries(skillGroups).map(([key, value]) => (
          <SkillItem
            key={key}
            name={key}
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
