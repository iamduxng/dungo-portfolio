import Menu from '~/components/Menu'
import Welcome from '~/components/Welcome'
import SayHi from '~/components/Memoji/SayHi'
import Categories from '~/components/Categories'

function Home() {
  return (
    <>
      <Menu />
      <Welcome />
      <SayHi />
      <Categories />
    </>
  )
}

export default Home
