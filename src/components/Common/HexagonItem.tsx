import styles from './Hexagon.module.css'

type Props = {
  classes: string
  style?: React.CSSProperties
}

function HexagonItem({
  classes,
  style,
  children
}: React.PropsWithChildren<Props>) {
  return (
    <div className={`${styles.hexagonItem} ${classes}`} style={style}>
      {children}
    </div>
  )
}

export default HexagonItem
