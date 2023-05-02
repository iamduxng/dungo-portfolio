import CategoryItemContent, {
  CATEGORY_ITEM
} from '~/components/Categories/CategoryItemContent'
import styles from './DesktopCategoryItem.module.css'

export type CategoryItemProps = {
  category: CATEGORY_ITEM
  handleOpen?: () => void
  isOpened: boolean
}

function DesktopCategoryItem({
  category,
  isOpened,
  handleOpen
}: CategoryItemProps) {
  return (
    <div
      className={`${styles.categoryItem} ${category.bgColor} ${
        isOpened ? styles.categoryOpened : ''
      }`}
      onClick={handleOpen}
    >
      <CategoryItemContent category={category} isOpened={isOpened} />
    </div>
  )
}

export default DesktopCategoryItem
