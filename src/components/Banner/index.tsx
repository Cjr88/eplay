import { useGetFeaturedGameQuery } from '../../services/api'

import Tag from '../Tag'
import Button from '../Button'

import { parseToBrl } from '../../utils'

import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Loading...</h3>
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <span>{parseToBrl(game.prices.old)}</span> <br />
            por apenas {parseToBrl(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          variant="primary"
          type="link"
          to={`product/${game.id}`}
          title="Click here to enjoy this price"
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}
export default Banner
