import styles from './Hexagon.module.css'

type Props = {
  classes: string
  style?: React.CSSProperties
  onClick?: () => void
}

function HexagonItem({
  classes,
  style,
  onClick,
  children
}: React.PropsWithChildren<Props>) {
  return (
    <div
      className={`${styles.hexagonItem} ${classes}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default HexagonItem
