import Headline from '~/components/Common/Headline'
import FlipCardContent from '~/components/Common/FlipCardContent'
import Button from '~/components/Common/Button'

import styles from './CategoryItemContent.module.css'
import Certificate from '~/components/Certificate'

export interface CATEGORY_ITEM {
  id: number
  name: string
  link?: string
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
    <FlipCardContent
      front={
        <>
          <img src={category.icon} className={styles.categoryIcon} />
          <Headline tag="h2" classes={styles.categoryLabel}>
            {category.name}
          </Headline>
        </>
      }
      back={
        <>
          <img
            src={category.memoji}
            className={`${styles.categoryMemoji} ${
              isOpened ? styles.animated : ''
            }`}
          />
          <div className={styles.categoryDesc}>
            &quot;{category.description}&quot;
          </div>
          {category.link ? (
            <Button
              as="link"
              to={`${category.link}`}
              className={styles.categoryBtn}
            >
              Show more
            </Button>
          ) : (
            <Certificate />
          )}
        </>
      }
    />
  )
}

export default CategoryItemContent
