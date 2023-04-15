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
      <Welcome classes={styles.welcome} />
      <Categories classes={styles.categories} />
      <About classes={styles.about} />
      <Contact classes={styles.contact} />
    </>
  )
}

export default Home
