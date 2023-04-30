import { WELCOME } from '~/utils/data'
import Headline from '~/components/Common/Headline'
import WelcomeVideo from '~/components/Welcome/WelcomeVideo'
import Sun from '~/components/Memoji/Sun'
import Animate, { ANIMATION_TYPE } from '~/components/Animate'
import HexagonItem from '~/components/Common/HexagonItem'
import Button from '~/components/Common/Button'
import { IconPhone } from '~/components/Icons'

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
        <Animate
          type={ANIMATION_TYPE.FROM_LEFT}
          style={{ '--duration': '2s' } as React.CSSProperties}
        >
          <Headline tag="h2" classes="text-white mb-2">
            {WELCOME.title}
          </Headline>
          <div className="mb-8 h-0.5 w-1/4 bg-white"></div>
        </Animate>
        <Animate type={ANIMATION_TYPE.FROM_LEFT}>
          <Headline>
            <div>{WELCOME.fullname}</div>
            <div>({WELCOME.othername})</div>
          </Headline>
        </Animate>
        <Animate
          type={ANIMATION_TYPE.FROM_LEFT}
          style={{ '--duration': '2.5s' } as React.CSSProperties}
        >
          <div className="mb-8 max-w-md text-xl">{WELCOME.description}</div>
          <div className={styles.contactMeButtonWrapper}>
            <Button as="a" href="#contact" className={styles.contactMeButton}>
              <span className="mr-2">Contact me</span>
              <IconPhone />
            </Button>
          </div>
        </Animate>
      </div>

      <Animate type={ANIMATION_TYPE.FROM_RIGHT} classes="w-full h-full">
        <WelcomeVideo>
          <HexagonItem classes={styles.myAvatarWrapper}></HexagonItem>
          <HexagonItem
            classes={styles.myAvatar}
            style={{ backgroundImage: `url('${WELCOME.avatar}')` }}
          />
        </WelcomeVideo>
      </Animate>
    </div>
  )
}

export default Welcome
