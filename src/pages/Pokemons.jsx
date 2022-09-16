import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import pokemonList from './../api/requests'
import { pokeInfo } from './../api/requests'

const Pokemons = () => {
  const [pokelist, setPokelist] = useState([])
  const [pokeinfo, setPokeinfo] = useState([])

  useEffect(() => {
    pokemonList().then((data) => setPokelist(data.results))
    // console.log(pokelist[0].url)
  }, [])

  useEffect(() => {
    // console.log(pokelist[0]?.url)
    pokeInfo("https://pokeapi.co/api/v2/pokemon/1/").then((data) => setPokeinfo(data.results))
  }, [pokeinfo])

  return (
    <div className="flex justify-center">
      <ul>
        {/* { pokelist.map(pokemon => <li key={pokemon.name}> {pokemon.name} </li>) } */}
        { pokelist[0]?.name }
        {/* { console.log(pokeInfo("https://pokeapi.co/api/v2/pokemon/1/").then((data) => setPokeinfo(data.results))) } */}
      </ul>
    </div>
  )
}

export default Pokemons
