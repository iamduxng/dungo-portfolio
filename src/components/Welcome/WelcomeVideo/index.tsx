import { useState } from 'react'
import { IconVideoPlay } from '~/components/Icons'
import MyModal from '~/components/Modal'
import Animate, { ANIMATION_TYPE } from '~/components/Animate'
import styles from './WelcomeVideo.module.css'

type Props = {
  children: React.ReactNode
}

function WelcomeVideo({ children }: Props) {
  const [isOpened, setIsOpened] = useState(false)

  const openVideo = () => setIsOpened(true)
  const closeVideo = () => setIsOpened(false)

  return (
    <div className={styles.welcomeVideo}>
      <MyModal isOpen={isOpened} onRequestClose={closeVideo} size="md">
        <div className="w-full max-w-screen-md">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/IR-6KE8C4VQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </MyModal>
      <div className="relative">
        <Animate
          type={ANIMATION_TYPE.ROTATE}
          classes={styles.playButton}
          style={{ '--delay': '2s' } as React.CSSProperties}
        >
          <div className={styles.playButtonInner} onClick={openVideo}>
            <IconVideoPlay size="2.25rem" />
          </div>
        </Animate>
        {children}
      </div>
    </div>
  )
}

export default WelcomeVideo
