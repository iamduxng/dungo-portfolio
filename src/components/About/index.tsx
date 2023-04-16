import Moon from '~/components/Memoji/Moon'

import styles from './About.module.css'

type Props = {
  classes: string
}

function About({ classes }: Props) {
  return (
    <div className={`${styles.about} ${classes}`}>
      <div className="absolute top-1/2 -left-8">
        <Moon />
      </div>
    </div>
  )
}

export default About
