import { useState } from 'react'
import MyModal from '~/components/Modal'
import Carousel from '~/components/Carousel'

import styles from './Album.module.css'

export interface IMAGE {
  src: string
}

export interface ALBUM {
  thumbnail: string
  name: string
  images: Array<IMAGE>
}

type Props = {
  album: ALBUM
}

function Album({ album }: Props) {
  const [isOpened, setIsOpened] = useState(false)

  const openDetails = () => setIsOpened(true)
  const closeDetails = () => setIsOpened(false)

  const albumSettings = {
    customPaging: (imgId: number) => {
      const currentImage = album.images[imgId]
      return (
        <div
          className={`${styles.modalPagingImage} album-paging`}
          style={{ backgroundImage: `url('${currentImage.src}')` }}
        />
      )
    },
    dots: true,
    dotsClass: styles.modalPaging,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <>
      <div
        className="flex h-72 w-full flex-col items-center"
        onClick={openDetails}
      >
        <div className={styles.album}>
          <div className={styles.albumBg} />
          <div
            className={styles.albumThumbnail}
            style={{ backgroundImage: `url('${album.thumbnail}')` }}
          />
        </div>
        <div className={styles.albumName}>{album.name}</div>
      </div>
      <MyModal
        isOpen={isOpened}
        onRequestClose={closeDetails}
        headline={album.name}
        classes="max-w-screen-lg h-screen flex flex-col"
      >
        <Carousel settings={albumSettings}>
          {album.images.map((image, idx) => (
            <div key={`modal-image-${idx}`} className={styles.modalImage}>
              <img src={image.src} className="h-full w-full" />
            </div>
          ))}
        </Carousel>
      </MyModal>
    </>
  )
}

export default Album
