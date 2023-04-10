import Headline from '~/components/Common/Headline'
import styles from './CategoryItem.module.css'
import Animate, { ANIMATION_TYPE } from '~/components/Animate'

type Props = React.PropsWithChildren<{
  label: string
  icon?: string
  bgColor: string
}>

function CategoryItem({ label, bgColor }: Props) {
  return (
    <Animate
      type={ANIMATION_TYPE.ENTRY}
      classes={`${styles.categoryItem} ${bgColor}`}
    >
      <Headline tag="h2" classes={styles.categoryItemLabel}>
        {label}
      </Headline>
    </Animate>
  )
}

export default CategoryItem
