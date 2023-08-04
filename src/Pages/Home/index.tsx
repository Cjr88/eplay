import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

export const promotion: Game[] = [
  {
    id: 1,
    category: 'action',
    description:
      'Resident Evil 4, A game called as Biozard4 in Japan, is an eletronic survival horror game..',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'action',
    description:
      'Resident Evil 4, A game called as Biozard4 in Japan, is an eletronic survival horror game..',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 3,
    category: 'action',
    description:
      'Resident Evil 4, A game called as Biozard4 in Japan, is an eletronic survival horror game..',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'action',
    description:
      'Resident Evil 4, A game called as Biozard4 in Japan, is an eletronic survival horror game..',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  }
]
export const soon: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV is a great game developed by Blizzard Entertainment',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['01/06'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    description: 'Adventure ',
    title: 'Zelda',
    system: 'PS4',
    infos: ['01/06'],
    image: zelda
  },
  {
    id: 7,
    category: 'Adventure',
    description: 'Star Wars an amazing adventure in the sky',
    title: 'Star Wars',
    system: 'Xbox',
    infos: ['01/06'],
    image: starWars
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo IV is a great game developed by Blizzard Entertainment',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['01/06'],
    image: diablo
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promotion} title="Promoções" background="gray" />
    <ProductList games={soon} title="Em breve" background="black" />
  </>
)

export default Home
