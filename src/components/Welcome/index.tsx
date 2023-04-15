import { WELCOME } from '~/utils/data'
import Headline from '~/components/Common/Headline'
import WelcomeVideo from '~/components/Welcome/WelcomeVideo'
import Sun from '~/components/Memoji/Sun'

import Animate, { ANIMATION_TYPE } from '~/components/Animate'

import styles from './Welcome.module.css'

type Props = {
  classes: string
}

function Welcome({ classes }: Props) {
  return (
    <div className={`${styles.welcome} ${classes}`}>
      <div className="absolute -top-8 -right-8">
        <Sun />
      </div>

      <div>
        <Animate type={ANIMATION_TYPE.FROM_LEFT}>
          <Headline>
            <div>{WELCOME.fullname}</div>
            <div>({WELCOME.othername})</div>
          </Headline>
        </Animate>
        <Animate
          type={ANIMATION_TYPE.FROM_LEFT}
          style={{ '--duration': '3s' } as React.CSSProperties}
        >
          <Headline tag="h2" classes={styles.myJobTitle}>
            {WELCOME.title}
          </Headline>
        </Animate>
        <Animate
          type={ANIMATION_TYPE.FROM_LEFT}
          style={{ '--duration': '4s' } as React.CSSProperties}
        >
          <div className="max-w-md">{WELCOME.description}</div>
        </Animate>
      </div>

      <Animate type={ANIMATION_TYPE.FROM_RIGHT}>
        <WelcomeVideo>
          <div
            className={styles.myAvatar}
            style={{ backgroundImage: `url('${WELCOME.avatar}')` }}
          ></div>
        </WelcomeVideo>
      </Animate>
    </div>
  )
}

export default Welcome
