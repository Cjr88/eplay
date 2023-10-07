import ProductList from '../../components/ProductsList'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportsGames } = useGetSportsGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportsGames) {
    return (
      <>
        <ProductList
          games={actionGames}
          title="Action"
          background="black"
          id="action"
        />
        <ProductList
          games={sportsGames}
          title="Sports"
          background="gray"
          id="sports"
        />
        <ProductList
          games={simulationGames}
          title="Simulator"
          background="black"
          id="simulator"
        />
        <ProductList
          games={fightGames}
          title="Fight"
          background="gray"
          id="fight"
        />
        <ProductList games={rpgGames} title="Rpg" background="black" id="rpg" />
      </>
    )
  }
  return <h4>Carregando</h4>
}

export default Categories
