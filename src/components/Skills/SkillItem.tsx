import { Suspense, lazy, useEffect, useState } from 'react'
import { groupBy } from 'lodash'
import { lazyLoadComponent } from '~/utils'
import FlipCardContent from '~/components/Common/FlipCardContent'
import Headline from '~/components/Common/Headline'
import styles from '~/components/Skills/SkillItem.module.css'
import MyModal from '~/components/Modal'
import Animate, { ANIMATION_TYPE } from '~/components/Animate'
import { IconStarFill } from '~/components/Icons'
import SkillHeadline from '~/components/Skills/SkillHeadline'

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
}

type IconProps = {
  iconName: string
}

function SkillIcon({ iconName }: IconProps) {
  const Icon = lazyLoadComponent(() => import('~/components/Icons'), iconName)

  return (
    <Suspense fallback={'Icon...'}>
      <Icon size="2rem" />
    </Suspense>
  )
}

function SkillItem({ name, gif, skills }: Props) {
  const [isOpened, setIsOpened] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  const openDetails = () => setIsOpened(true)
  const closeDetails = () => setIsOpened(false)

  const groupedSkillsByLevel = Object.entries(
    groupBy(skills, (skill: SKILL) => skill.level)
  ).map(([key, value]) => ({ level: key, value }))

  console.log(groupedSkillsByLevel)

  useEffect(() => {
    let timeout = null
    if (isOpened) {
      timeout = setTimeout(() => setIsFlipped(true), 1000)
    } else {
      setIsFlipped(false)
      if (timeout) clearTimeout(timeout)
    }
  }, [isOpened])

  return (
    <>
      <MyModal
        isOpen={isOpened}
        onRequestClose={closeDetails}
        classes="h-full max-w-screen-md"
      >
        <div
          className={`${styles.modalSkill} ${
            isFlipped ? styles.modalSkillOpened : ''
          } no-scrollbar`}
        >
          <FlipCardContent
            front={
              <Animate type={ANIMATION_TYPE.POP_IN} classes="opacity-0">
                <SkillHeadline>
                  <Headline tag="h1" classes={styles.skillHeadline}>
                    {name}
                  </Headline>
                </SkillHeadline>
              </Animate>
            }
            back={
              <div className="overflow-auto">
                {groupedSkillsByLevel.map((group, groupIdx) => (
                  <div
                    key={`grouped-${groupIdx}`}
                    className={styles.modalSkillGroupByLevel}
                  >
                    <SkillHeadline classes="max-w-[10rem]">
                      <div className={styles.modalSkillLevel}>
                        {Array(parseInt(group.level))
                          .fill('')
                          .map((_level, levelIdx) => (
                            <IconStarFill
                              key={`${groupIdx}-level-${levelIdx}`}
                              size="2rem"
                            />
                          ))}
                      </div>
                    </SkillHeadline>
                    <div className={styles.modalSkillGroup}>
                      {group.value.map((skill, skillIdx) => (
                        <div
                          key={`${groupIdx}-skill-${skillIdx}`}
                          className="m-4"
                        >
                          <div className={styles.modalSkillIcon}>
                            <SkillIcon iconName={skill.icon} />
                          </div>
                          <div className={styles.modalSkillName}>
                            {skill.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            }
          />
        </div>
      </MyModal>
      <div className={styles.skillItem} onClick={openDetails}>
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

        <SkillHeadline classes="mt-8">
          <Headline tag="h3" classes={styles.skillHeadline}>
            {name}
          </Headline>
        </SkillHeadline>
      </div>
    </>
  )
}

export default SkillItem
