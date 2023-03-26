import { useState } from 'react'
import { IconVideoPlay } from '~/components/Icons'
import styles from './WelcomeVideo.module.css'

function WelcomeVideo({ children }) {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div className={styles.welcomeVideo}>
      {isOpened && (
        <div className="mr-8 flex-1">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/IR-6KE8C4VQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <div className="relative">
        {!isOpened && (
          <div className={styles.playButton} onClick={() => setIsOpened(true)}>
            <IconVideoPlay size="2.5rem" />
          </div>
        )}
        {children}
      </div>
    </div>
  )
}

export default WelcomeVideo
