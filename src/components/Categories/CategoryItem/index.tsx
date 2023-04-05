import Headline from '~/components/Common/Headline'
import styles from './CategoryItem.module.css'

type Props = React.PropsWithChildren<{
  label: string
  icon?: string
  bgColor: string
}>

function CategoryItem({ label, bgColor }: Props) {
  return (
    <div className={`${styles.categoryItem} ${bgColor}`}>
      <Headline tag="h1" classes={styles.categoryItemLabel}>
        {label}
      </Headline>
    </div>
  )
}

export default CategoryItem
