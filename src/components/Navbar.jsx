import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center font-bold p-4 mb-5 bg-slate-400">
      <ul className="flex gap-4">
        <li className="hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link to="/pokemonlist">Pokemons</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
