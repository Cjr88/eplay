import { useState } from 'react'
import { GalleryItem } from '../Pages/Home'
import zelda from '../assets/images/zelda.png'
import hogwarts from '../assets/images/fundo_hogwarts.png'
import close from '../assets/images/fechar.png'
import zoom from '../assets/images/zoom.png'
import play from '../assets/images/play.png'
import Section from '../components/Section'
import { Action, Item, Items, Modal, ModalContent } from './styles'

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/BtyBjOW8sGY'
  }
]

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
        <Items>
          {items.map((media, index) => (
            <Item
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
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisiblle ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={close}
              alt="Close icon"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}
export default Gallery
