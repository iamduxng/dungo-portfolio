import HexagonItem from '~/components/Common/HexagonItem'
import Headline from '~/components/Common/Headline'
import styles from './HobbyItem.module.css'

export type HOBBY = {
  name: string
  description: string
}

type Props = React.PropsWithChildren<{
  hobby: HOBBY
  classes?: string
}>

function HobbyItem({ hobby, classes }: Props) {
  return (
    <HexagonItem classes={`${styles.hobbyItem} ${classes}`}>
      <div className={styles.hobbyItemContent}>
        <Headline classes="mb-2" tag="h2">
          {hobby.name}
        </Headline>
        <div className="text-center text-sm font-light">
          {hobby.description}
        </div>
      </div>
    </HexagonItem>
  )
}

export default HobbyItem