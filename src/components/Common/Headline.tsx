import styles from './Headline.module.css'

type Headline = 'h1' | 'h2' | 'h3' | 'h4'

type Props = React.PropsWithChildren<{
  tag?: Headline
  classes?: string
}>

function Headline({ children, tag = 'h1', classes = '' }: Props) {
  return <div className={`${classes} ${styles[tag]} font-bold`}>{children}</div>
}

export default Headline
