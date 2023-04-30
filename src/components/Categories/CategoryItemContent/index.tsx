import Headline from '~/components/Common/Headline'
import Button from '~/components/Common/Button'

import styles from './CategoryItemContent.module.css'

export interface CATEGORY_ITEM {
  name: string
  link: string
  description: string
  icon: string
  memoji: string
  bgColor: string
}

type Props = React.PropsWithChildren<{
  category: CATEGORY_ITEM
  isOpened: boolean
}>

function CategoryItemContent({ category, isOpened }: Props) {
  return (
    <>
      <div className={`${styles.category}`}>
        <img src={category.icon} className={styles.categoryIcon} />
        <Headline tag="h2" classes={styles.categoryLabel}>
          {category.name}
        </Headline>
      </div>
      <div className={`${styles.category} ${styles.back}`}>
        <img
          src={category.memoji}
          className={`${styles.categoryMemoji} ${
            isOpened ? styles.animated : ''
          }`}
        />
        <div className={styles.categoryDesc}>
          &quot;{category.description}&quot;
        </div>
        <Button
          as="link"
          to={`${category.link}`}
          className={styles.categoryBtn}
        >
          Show more
        </Button>
      </div>
    </>
  )
}

export default CategoryItemContent
