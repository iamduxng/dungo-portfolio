import WelcomeVideo from '~/components/Welcome/WelcomeVideo'
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
          <div className="text-6xl font-bold">
            <div>{myData.fullname}</div>
            <div>({myData.othername})</div>
          </div>
          <div className={styles.myJobTitle}>{myData.title}</div>
          <div className="max-w-md text-xl">{myData.description}</div>
        </div>

        <WelcomeVideo>
          <div
            className={styles.myAvatar}
            style={{ backgroundImage: `url('${myData.avatar}')` }}
          ></div>
        </WelcomeVideo>
      </div>
    </div>
  )
}

export default Welcome
