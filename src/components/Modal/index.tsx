import Modal from 'react-modal'
import styles from './Modal.module.css'
import { IconClose } from '~/components/Icons'
import Headline from '../Common/Headline'

type Props = {
  headline?: string
  classes?: string
  isOpen: boolean
  onRequestClose?: () => void
}

function MyModal({
  headline,
  classes = 'max-w-screen-lg',
  children,
  ...props
}: React.PropsWithChildren<Props>) {
  return (
    <Modal
      {...props}
      className={`${styles.content} ${classes}`}
      overlayClassName={styles.overlay}
      bodyOpenClassName="overflow-hidden"
    >
      {headline && (
        <Headline tag="h3" classes={styles.headline}>
          {headline}
        </Headline>
      )}
      {children}
      <div className={styles.close} onClick={props.onRequestClose}>
        <IconClose size={40} />
      </div>
    </Modal>
  )
}

export default MyModal
