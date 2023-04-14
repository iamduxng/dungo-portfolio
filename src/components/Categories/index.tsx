import Animate, { ANIMATION_TYPE } from '~/components/Animate'
import CategoryItem from '~/components/Categories/CategoryItem'

import styles from './Categories.module.css'
import { useState, useTransition } from 'react'

const CATEGORIES = [
  {
    label: 'Skills',
    bgColor: 'bg-rose-400',
    link: '/skills',
    description:
      'If my career was a game, my technical skills would be my power, abilities and weapon.',
    icon: '/elementals/fire.png'
  },
  {
    label: 'Projects',
    bgColor: 'bg-green-400',
    link: '/projects',
    description: 'Discover all the projects I have been working on.',
    icon: '/elementals/earth.png'
  },
  {
    label: 'Certificates',
    bgColor: 'bg-teal-400',
    link: '/certificates',
    description:
      'Human beings need certificates of education, but knowledge needs no certification.',
    icon: '/elementals/air.png'
  }
]

function Categories() {
  const [redirectedPage, setRedirectedPage] = useState('')
  const [isPending, startTransition] = useTransition()

  const toggleDetails = (categoryLink: string) => {
    startTransition(() => {
      setRedirectedPage(categoryLink)
    })
  }

  return (
    <div className={styles.categoriesContainer}>
      <Animate type={ANIMATION_TYPE.POP_IN} classes={styles.categoriesList}>
        {CATEGORIES.map((category, idx) => (
          <CategoryItem
            key={`category-item-${idx}`}
            category={category}
            isOpened={category.link === redirectedPage}
            handleOpen={() => toggleDetails(category.link)}
          />
        ))}
      </Animate>
    </div>
  )
}

export default Categories
