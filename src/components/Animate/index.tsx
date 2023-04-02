import { useRef } from 'react'
import useScrollAnimate from '~/hooks/useIntersection'
import styles from './Animate.module.css'

export const ANIMATION_TYPE = {
  FROM_LEFT: 'leftSlideIn',
  FROM_RIGHT: 'rightSlideIn',
  ROTATE: 'rotate'
}

type Props = {
  type: string
  classes?: string
  style?: React.CSSProperties
}

function Animate({
  type,
  classes = '',
  style = {},
  children
}: React.PropsWithChildren<Props>) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const { isIntersecting } = useScrollAnimate(wrapperRef)

  const className = `${classes} ${
    isIntersecting ? styles[`animate_${type}`] : ''
  }`

  return (
    <div ref={wrapperRef} className={className} style={style}>
      {children}
    </div>
  )
}

export default Animate
