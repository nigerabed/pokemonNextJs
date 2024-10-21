
import PokeList from "@/components/PokeList"

export default async function PokemonList({ searchParams }) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1025`)
    let json = await response.json();

    const search = searchParams.search;
    console.log("------*****-------", search);
    json = json.results.filter(item => item.name.toLowerCase().includes(search));

    return (
        <>
            <PokeList pokemon={json} />
        </>
    )

}
