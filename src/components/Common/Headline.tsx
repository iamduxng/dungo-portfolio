import styles from './Headline.module.css'

type Props = {
  tag: string
  classes: string
}

function Headline({
  children,
  tag = 'h1',
  classes = ''
}: React.PropsWithChildren<Props>) {
  return <div className={`${classes} ${styles[tag]} font-bold`}>{children}</div>
}

export default Headline
