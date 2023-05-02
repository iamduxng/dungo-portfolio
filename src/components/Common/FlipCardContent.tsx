import styles from './FlipCardContent.module.css'

type Props = {
  front: React.ReactNode
  back: React.ReactNode
}

function FlipCardContent({ front, back }: Props) {
  return (
    <>
      <div className={`${styles.flipCard}`}>{front}</div>
      <div className={`${styles.flipCard} ${styles.back}`}>{back}</div>
    </>
  )
}

export default FlipCardContent
