import { useState } from 'react'
import Animate, { ANIMATION_TYPE } from '~/components/Animate'
import { IconClose } from '~/components/Icons'
import styles from './SayHi.module.css'

function SayHi() {
  const [isOpened, setIsOpened] = useState(true)

  if (isOpened) {
    return (
      <div className={styles.wrapper}>
        <img src="/memojis/hi.png" className={styles.image} />

        <Animate
          type={ANIMATION_TYPE.POP_IN}
          classes={styles.tooltip}
          style={{ '--delay': '6s' } as React.CSSProperties}
        >
          Hello recuiters! This is for you. <button>Click here</button> if you
          want to dig into technical stuffs under this site.
          <div className={styles.close} onClick={() => setIsOpened(false)}>
            <IconClose />
          </div>
        </Animate>
      </div>
    )
  }

  return <></>
}

export default SayHi
