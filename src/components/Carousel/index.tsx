import Slider, { Settings } from 'react-slick'

type Props = React.PropsWithChildren<{
  settings: Settings
}>

function Carousel({ children, settings }: Props) {
  return <Slider {...settings}>{children}</Slider>
}

export default Carousel
