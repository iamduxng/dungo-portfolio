import CategoryItemContent from '~/components/Categories/CategoryItemContent'
import { CategoryItemProps } from '~/components/Categories/DesktopCategoryItem'

import sharedStyles from '~/components/Categories/DesktopCategoryItem/DesktopCategoryItem.module.css'
import styles from './MobileCategoryItem.module.css'

function MobileCategoryItem({
  category,
  isOpened,
  handleOpen
}: CategoryItemProps) {
  return (
    <div
      className={`${styles.categoryItem} ${category.bgColor} ${
        isOpened ? sharedStyles.categoryOpened : ''
      }`}
      onClick={handleOpen}
    >
      <CategoryItemContent category={category} isOpened={isOpened} />
    </div>
  )
}

export default MobileCategoryItem
