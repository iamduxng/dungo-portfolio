import styles from './Headline.module.css'

function Headline({ children, tag = 'h1', classes = '' }) {
  return <div className={`${classes} ${styles[tag]} font-bold`}>{children}</div>
}

export default Headline
