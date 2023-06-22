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
  const [redirectedPage, setRedirectedPage] = useState(0)
  const [isPending, startTransition] = useTransition()
  const responsive = useResponsive()

  const toggleDetails = (categoryId: number) => {
    startTransition(() => {
      setRedirectedPage(categoryId)
    })
  }

  const resetDetails = () => setRedirectedPage(0)

  if (responsive.md) {
    return (
      <div className={`${styles.categoriesContainer} ${classes}`}>
        <Animate type={ANIMATION_TYPE.POP_IN} classes={styles.categoriesList}>
          {CATEGORIES.map((category, idx) => (
            <DesktopCategoryItem
              key={`category-item-${idx}`}
              category={category}
              isOpened={category.id === redirectedPage}
              handleOpen={() => toggleDetails(category.id)}
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
    afterChange: (newIndex: number) => toggleDetails(CATEGORIES[newIndex].id)
  }
  return (
    <div className={`${styles.categoriesContainer} ${classes}`}>
      <Carousel settings={carouselSettings}>
        {CATEGORIES.map((category, idx) => (
          <MobileCategoryItem
            key={`category-item-${idx}`}
            category={category}
            isOpened={category.id === redirectedPage}
            handleOpen={() => toggleDetails(category.id)}
          />
        ))}
      </Carousel>
    </div>
  )
}

export default Categories
