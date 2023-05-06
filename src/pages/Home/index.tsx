import Menu from '~/components/Menu'
import Welcome from '~/components/Welcome'
import SayHi from '~/components/Memoji/SayHi'
import Categories from '~/components/Categories'
import About from '~/components/About'
import Contact from '~/components/Contact'

import styles from './Home.module.css'

function Home() {
  return (
    <>
      <Menu />
      <SayHi />
      <Welcome classes={`${styles.section} bg-day`} />
      <Categories classes={`${styles.section} bg-afternoon h-screen`} />
      <About classes={`${styles.section} bg-evening`} />
      <Contact classes={`${styles.section} bg-midnight`} />
    </>
  )
}

export default Home
