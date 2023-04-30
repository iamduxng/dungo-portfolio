import { useState } from 'react'
import { useResponsive } from 'ahooks'
import MyModal from '~/components/Modal'
import Animate, { ANIMATION_TYPE } from '~/components/Animate'
import HobbyItem, { HOBBY } from '~/components/About/HobbyItem'

import aboutStyles from '~/components/About/About.module.css'
import styles from './Games.module.css'
import Carousel from '~/components/Carousel'
import { GAMES } from '~/utils/data'
import Headline from '~/components/Common/Headline'

type Props = {
  hobby: HOBBY
}

function Games({ hobby }: Props) {
  const [isOpened, setIsOpened] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const responsive = useResponsive()

  const openDetails = () => setIsOpened(true)
  const closeDetails = () => setIsOpened(false)

  const gameSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    centerMode: true,
    centerPadding: '80px',
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex)
    }
  }

  return (
    <>
      <MyModal
        isOpen={isOpened}
        onRequestClose={closeDetails}
        headline="My Favourite Games"
        classes="max-w-screen-sm"
      >
        <Carousel settings={gameSettings}>
          {GAMES.map((game, idx) => (
            <div key={`game-${idx}`} className={styles.gameSlideItem}>
              <div className="relative w-full flex-1">
                <img
                  src={game.thumbnail}
                  className="h-auto w-full rounded-2xl"
                />
                <Headline
                  tag="h3"
                  classes="absolute -bottom-4 right-4 p-4 bg-white bg-opacity-20 rounded-2xl"
                >
                  <div>{game.points} / 10</div>
                </Headline>
              </div>
              {currentSlide === idx && (
                <>
                  <div className="my-4 text-center text-lg font-bold">
                    {game.name}
                  </div>
                  <div className="text-center line-clamp-4">
                    {game.description}
                  </div>
                </>
              )}
            </div>
          ))}
        </Carousel>
      </MyModal>
      <Animate
        type={ANIMATION_TYPE.FROM_RIGHT}
        style={
          responsive.md
            ? ({ '--toX': '-20%', '--toY': '52%' } as React.CSSProperties)
            : {}
        }
        classes={aboutStyles.hobbyItem}
      >
        <HobbyItem hobby={hobby} onClick={openDetails} />
      </Animate>
    </>
  )
}

export default Games
