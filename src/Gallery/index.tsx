import { useState } from 'react'

import Section from '../components/Section'

import { GalleryItem } from '../Pages/Home'
import * as S from './styles'

import close from '../assets/images/fechar.png'
import zoom from '../assets/images/zoom.png'
import play from '../assets/images/play.png'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisiblle: boolean
}
const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisiblle: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }
  const closeModal = () => {
    setModal({
      isVisiblle: false,
      type: 'image',
      url: ''
    })
  }
  return (
    <>
      <Section title="Galery" background="black">
        <S.Items>
          {items.map((media, index) => (
            <S.Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisiblle: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisiblle ? 'is-visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Close icon" onClick={closeModal} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </S.ModalContent>
        <div onClick={closeModal} className="overlay"></div>
      </S.Modal>
    </>
  )
}
export default Gallery
