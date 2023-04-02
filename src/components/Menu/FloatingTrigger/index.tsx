import { IconRightSidebar, IconClose } from '~/components/Icons'
import styles from './FloatingTrigger.module.css'

type Props = {
  toggleMenu: (event: React.MouseEvent<HTMLElement>) => void
  isOpened: boolean
}

function FloatingTrigger({ toggleMenu, isOpened }: Props) {
  return (
    <>
      <div className={`${styles.trigger} ${isOpened ? styles.active : ''}`}>
        <button className="mt-10 ml-10" onClick={toggleMenu}>
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
