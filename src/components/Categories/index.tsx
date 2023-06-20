import { useState, useTransition } from 'react'
import { useResponsive } from 'ahooks'
import { CATEGORIES } from '~/utils/data'
import Animate, { ANIMATION_TYPE } from '~/components/Animate'
import Carousel from '~/components/Carousel'
import MobileCategoryItem from '~/components/Categories/MobileCategoryItem'
import DesktopCategoryItem from '~/components/Categories/DesktopCategoryItem'

import styles from './Categories.module.css'

type Props = {
  classes: string
}

function Categories({ classes }: Props) {
  const [redirectedPage, setRedirectedPage] = useState('')
  const [isPending, startTransition] = useTransition()
  const responsive = useResponsive()

  const toggleDetails = (categoryLink: string) => {
    if (categoryLink) {
      startTransition(() => {
        setRedirectedPage(categoryLink)
      })
    }
  }

  const resetDetails = () => setRedirectedPage('')

  if (responsive.md) {
    return (
      <div className={`${styles.categoriesContainer} ${classes}`}>
        <Animate type={ANIMATION_TYPE.POP_IN} classes={styles.categoriesList}>
          {CATEGORIES.map((category, idx) => (
            <DesktopCategoryItem
              key={`category-item-${idx}`}
              category={category}
              isOpened={category.link === redirectedPage}
              handleOpen={() => toggleDetails(category.link ?? '')}
            />
          ))}
        </Animate>
      </div>
    )
  }

  const carouselSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    centerMode: true,
    onSwipe: () => resetDetails()
  }
  return (
    <div className={`${styles.categoriesContainer} ${classes}`}>
      <Carousel settings={carouselSettings}>
        {CATEGORIES.map((category, idx) => (
          <MobileCategoryItem
            key={`category-item-${idx}`}
            category={category}
            isOpened={category.link === redirectedPage}
            handleOpen={() => toggleDetails(category.link || '')}
          />
        ))}
      </Carousel>
    </div>
  )
}

export default Categories
