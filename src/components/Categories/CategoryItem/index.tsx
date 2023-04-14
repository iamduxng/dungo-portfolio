import Headline from '~/components/Common/Headline'
import styles from './CategoryItem.module.css'
import Button from '~/components/Common/Button'

interface CATEGORY_ITEM {
  label: string
  bgColor: string
  link: string
  description: string
  icon?: string
}

type Props = React.PropsWithChildren<{
  category: CATEGORY_ITEM
  handleOpen: () => void
  isOpened: boolean
}>

function CategoryItem({ category, isOpened, handleOpen }: Props) {
  return (
    <div
      className={`${styles.categoryAnimate} ${
        isOpened ? styles.categoryOpened : ''
      }`}
      onClick={handleOpen}
    >
      <div className={`${styles.category} ${category.bgColor}`}>
        <img src={category.icon} className={styles.categoryIcon} />
        <Headline tag="h2" classes={styles.categoryLabel}>
          {category.label}
        </Headline>
        <div className={styles.categoryDesc}>{category.description}</div>
      </div>
      <div className={`${styles.category} ${category.bgColor} ${styles.back}`}>
        {/* TODO: Memoji */}
        <Button
          as="link"
          to={`${category.link}`}
          className={styles.categoryBtn}
        >
          Show more
        </Button>
      </div>
    </div>
  )
}

export default CategoryItem
