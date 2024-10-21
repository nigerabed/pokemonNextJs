import Pokemon from "@/components/Pokemon";

export default async function PokeDetails({params}){
    const{ name } = params;
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name)
    const json = await response.json()
    return <Pokemon pokemon = {json} />
}