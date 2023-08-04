import { Image, Title, Prices } from './styles'
import imgBanner from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${imgBanner})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Title>Marvel&apos;s Spider Man: Mires Morales PS4 & PS5</Title>
        <Prices>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90
        </Prices>
      </div>
      <Button type="link" to="/product" title="Click here to enjoy this price">
        Aproveitar
      </Button>
    </div>
  </Image>
)
export default Banner
