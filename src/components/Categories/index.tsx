import styles from './Categories.module.css'
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
      <div className={styles.categoriesList}>
        {CATEGORIES.map((category, idx) => (
          <CategoryItem
            key={`category-item-${idx}`}
            label={category.label}
            bgColor={category.bgColor}
          />
        ))}
      </div>
    </div>
  )
}

export default Categories
