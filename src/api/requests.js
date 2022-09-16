export default function pokemonList() {
  const url = "https://pokeapi.co/api/v2/pokemon"
  
  const result = fetch(url).then(response => response.json()).then(data => data)
  
  return result
}

export function pokeInfo(url) {
  
  const result = fetch(url).then(response => response.json()).then(data => data)
  
  return result
}
