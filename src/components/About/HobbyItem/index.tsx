import { Link } from 'react-router-dom'
import HexagonItem from '~/components/Common/HexagonItem'
import Headline from '~/components/Common/Headline'
import styles from './HobbyItem.module.css'

export type HOBBY = {
  name: string
  description: string
  link: string
  memoji: string
  bgColor: string
}

type Props = React.PropsWithChildren<{
  hobby: HOBBY
  classes?: string
  onClick?: () => void
}>

function HobbyItem({ hobby, classes, onClick }: Props) {
  return (
    <HexagonItem
      classes={`${styles.hobbyItem} ${classes} ${hobby.bgColor}`}
      onClick={onClick}
    >
      <div className={styles.hobbyItemMemoji}>
        <img src={hobby.memoji} />
      </div>
      <Link to={hobby.link} className={styles.hobbyItemContent}>
        <div className="relative z-[1] text-center">
          <Headline classes="mb-2" tag="h2">
            {hobby.name}
          </Headline>
          <div className="text-center text-sm">{hobby.description}</div>
        </div>
      </Link>
    </HexagonItem>
  )
}

export default HobbyItem
