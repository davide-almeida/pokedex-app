import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from '../App';
import Errors from '../components/Errors';
import Home from "../pages/home/Index";
import Pokemons from '../pages/Pokemons';

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/:id" element={<Errors />} />
          <Route path="/pokemonlist" element={<Pokemons />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default Index