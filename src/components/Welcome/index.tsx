import Headline from '~/components/Common/Headline'
import WelcomeVideo from '~/components/Welcome/WelcomeVideo'
import Animate, { ANIMATION_TYPE } from '~/components/Animate'

import styles from './Welcome.module.css'

const myData = {
  title: 'Front-end Developer',
  fullname: 'Dung Duc Ngo',
  othername: 'Zayn',
  description:
    'As a big fan of Javascript. I belive Javascript can do everything: web development, Machine learning, Game, etc.',
  thumbnail:
    'http://drive.google.com/uc?export=view&id=0B6jDx05tK16ENU12Tm1qVDk5Z0U',
  avatar:
    'http://drive.google.com/uc?export=view&id=1mR6Pb3xQxqIkGzAkIjubf9p8aZLpX4dE'
}

function Welcome() {
  return (
    <div className={styles.welcome}>
      <div
        className={styles.welcomeThumbnail}
        style={{ backgroundImage: `url('${myData.thumbnail}')` }}
      ></div>
      <div className={styles.welcomeMain}>
        <div>
          <Animate type={ANIMATION_TYPE.FROM_LEFT}>
            <Headline>
              <div>{myData.fullname}</div>
              <div>({myData.othername})</div>
            </Headline>
          </Animate>
          <Animate
            type={ANIMATION_TYPE.FROM_LEFT}
            style={{ '--duration': '3s' } as React.CSSProperties}
          >
            <Headline tag="h2" classes={styles.myJobTitle}>
              {myData.title}
            </Headline>
          </Animate>
          <Animate
            type={ANIMATION_TYPE.FROM_LEFT}
            style={{ '--duration': '4s' } as React.CSSProperties}
          >
            <div className="max-w-md">{myData.description}</div>
          </Animate>
        </div>

        <Animate type={ANIMATION_TYPE.FROM_RIGHT}>
          <WelcomeVideo>
            <div
              className={styles.myAvatar}
              style={{ backgroundImage: `url('${myData.avatar}')` }}
            ></div>
          </WelcomeVideo>
        </Animate>
      </div>
    </div>
  )
}

export default Welcome
