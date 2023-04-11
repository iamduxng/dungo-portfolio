import styles from './Categories.module.css'
import Animate, { ANIMATION_TYPE } from '~/components/Animate'
import CategoryItem from '~/components/Categories/CategoryItem'

const CATEGORIES = [
  {
    label: 'Skills',
    bgColor: 'bg-red-300'
  },
  {
    label: 'Projects',
    bgColor: 'bg-yellow-300'
  },
  {
    label: 'Certificates',
    bgColor: 'bg-blue-300'
  }
]

function Categories() {
  return (
    <div className={styles.categoriesContainer}>
      <Animate type={ANIMATION_TYPE.POP_IN} classes={styles.categoriesList}>
        {CATEGORIES.map((category, idx) => (
          <CategoryItem
            key={`category-item-${idx}`}
            label={category.label}
            bgColor={category.bgColor}
          />
        ))}
      </Animate>
    </div>
  )
}

export default Categories
