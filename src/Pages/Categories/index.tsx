import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [gamesAction, setGamesAction] = useState<Game[]>([])
  const [gamesSports, setGamesSports] = useState<Game[]>([])
  const [gamesSimulator, setGamesSimulator] = useState<Game[]>([])
  const [gamesFight, setGamesFight] = useState<Game[]>([])
  const [gamesRpg, setGamesRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAction(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesSports(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulator(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesFight(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRpg(res))
  }, [])

  return (
    <>
      <ProductList games={gamesAction} title="Action" background="black" />
      <ProductList games={gamesSports} title="Sports" background="gray" />
      <ProductList
        games={gamesSimulator}
        title="Simulator"
        background="black"
      />
      <ProductList games={gamesFight} title="Fight" background="gray" />
      <ProductList games={gamesRpg} title="Rpg" background="black" />
    </>
  )
}

export default Categories
