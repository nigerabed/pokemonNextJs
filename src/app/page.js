
import Header from "@/components/Header"
import PokeList from "@/components/PokeList"

export default async function Home() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1500")
  const json = await response.json()

  return (
    <>
     <Header />
      <PokeList pokemon={json.results}  />
    </>
  )

}

