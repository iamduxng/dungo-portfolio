import { Link } from 'react-router-dom'
import HexagonItem from '~/components/Common/HexagonItem'
import Headline from '~/components/Common/Headline'
import styles from './HobbyItem.module.css'

export type HOBBY = {
  name: string
  description: string
  link: string
}

type Props = React.PropsWithChildren<{
  hobby: HOBBY
  classes?: string
  onClick?: () => void
}>

function HobbyItem({ hobby, classes, onClick }: Props) {
  return (
    <HexagonItem classes={`${styles.hobbyItem} ${classes}`} onClick={onClick}>
      <Link to={hobby.link} className={styles.hobbyItemContent}>
        <Headline classes="mb-2" tag="h2">
          {hobby.name}
        </Headline>
        <div className="text-center text-sm font-light">
          {hobby.description}
        </div>
      </Link>
    </HexagonItem>
  )
}

export default HobbyItem
