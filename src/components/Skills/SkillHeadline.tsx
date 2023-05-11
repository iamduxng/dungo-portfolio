import styles from './SkillHeadline.module.css'

type Props = {
  classes?: string
}

function SkillHeadline({ classes, children }: React.PropsWithChildren<Props>) {
  return (
    <div className={`${styles.skillHeadline} ${classes}`}>
      <img src="title-decoration.png" />
      {children}
      <img src="title-decoration-bottom.png" />
    </div>
  )
}

export default SkillHeadline
