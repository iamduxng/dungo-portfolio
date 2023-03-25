import { IconRightSidebar, IconClose } from '~/components/Icons'
import styles from './FloatingTrigger.module.css'

function FloatingTrigger({ toggleMenu, isOpened }) {
  return (
    <>
      <div className={`${styles.trigger} ${isOpened ? styles.active : ''}`}>
        <button className="mt-10 ml-10" onClick={() => toggleMenu()}>
          {isOpened ? (
            <IconClose size="2rem" />
          ) : (
            <IconRightSidebar size="2rem" />
          )}
        </button>
      </div>
    </>
  )
}

export default FloatingTrigger
