import { useCallback, useState } from 'react'
import FloatingTrigger from '~/components/Menu/FloatingTrigger'
import styles from './Menu.module.css'
import { IconUser, IconWork, IconHalfStar } from '~/components/Icons'

const MENU_ITEMS = [
  {
    icon: IconUser,
    label: 'About me'
  },
  {
    icon: IconWork,
    label: 'Projects'
  },
  {
    icon: IconHalfStar,
    label: 'Skills'
  }
]

function Menu() {
  const [isOpened, setIsOpened] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsOpened((state) => !state)
  }, [])

  return (
    <>
      <FloatingTrigger toggleMenu={toggleMenu} isOpened={isOpened} />
      <div
        className={`${styles.menu} ${
          isOpened
            ? 'visible h-60 w-60 opacity-100'
            : 'invisible h-0 w-0 opacity-0'
        }`}
      >
        {MENU_ITEMS.map((item, idx) => (
          <div
            key={`menuItem-${idx}`}
            style={{ '--i': idx } as React.CSSProperties}
            className={styles.item}
          >
            <div className={styles.itemInner}>
              <div className={styles.itemLabel}>{item.label}</div>
              <item.icon size="2rem" />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Menu
