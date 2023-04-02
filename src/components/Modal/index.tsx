import Modal from 'react-modal'
import styles from './Modal.module.css'

type Props = {
  size: string
  isOpen: boolean
}

function MyModal({
  children,
  size = 'md',
  ...props
}: React.PropsWithChildren<Props>) {
  const modalSize = `max-w-screen-${size}`

  return (
    <Modal
      {...props}
      className={`${styles.content} ${modalSize}`}
      overlayClassName={styles.overlay}
      bodyOpenClassName="overflow-hidden"
    >
      {children}
    </Modal>
  )
}

export default MyModal
