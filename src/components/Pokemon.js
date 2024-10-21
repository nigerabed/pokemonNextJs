//src/components/pokemon.js
"use client";

import Link from "next/link";
import { useRouter } from 'next/navigation'


export default function Pokemon({ pokemon }) {


    const router = useRouter()


  
    const colorBGType = {
        normal: "bg-red-500",
        fighting: "bg-gray-600",
        flying: "bg-blue-300",
        poison: "bg-purple-500",
        ground: "bg-yellow-600",
        rock: "bg-gray-700",
        bug: "bg-green-500",
        ghost: "bg-purple-700",
        steel: "bg-gray-400",
        fire: "bg-orange-500",
        water: "bg-blue-500",
        grass: "bg-green-600",
        electric: "bg-yellow-300",
        psychic: "bg-pink-500",
        ice: "bg-blue-200",
        dragon: "bg-indigo-700",
        dark: "bg-gray-800",
        fairy: "bg-pink-300",
        unknown: "bg-gray-500",
    };
    const colorType = {
        normal: "text-red-500",
        fighting: "text-gray-600",
        flying: "text-blue-300",
        poison: "text-purple-500",
        ground: "text-yellow-600",
        rock: "text-gray-700",
        bug: "text-green-500",
        ghost: "text-purple-700",
        steel: "text-gray-400",
        fire: "text-orange-500",
        water: "text-blue-500",
        grass: "text-green-600",
        electric: "text-yellow-300",
        psychic: "text-pink-500",
        ice: "text-blue-200",
        dragon: "text-indigo-700",
        dark: "text-gray-800",
        fairy: "text-pink-300",
        unknown: "text-gray-500",
    };

    const primaryType = pokemon.types[0].type.name;

    function handleLeftArrow(){
         
        router.push('/pokemon/' + ((pokemon.id) - 1), { scroll: false })
        
    }
    function handleRightArrow(){
        
        router.push('/pokemon/' + ((pokemon.id) + 1), { scroll: false })
        console.log("clicked right and goto: " + (Number(pokemon.id) + 1));
    }



    return (
        <>
            <div className={"w-full h-full absolute z-[-1] " + colorBGType[primaryType]}></div>
            <div>
                <div>
                    <div className="flex justify-around items-center pt-[1em] text-white">
                        <Link href="/">
                            <svg className="size-[1em] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                        </Link>
                        <h2 className="text-xl  font-bold ">{pokemon.name}</h2>
                        <span>#{pokemon.id.toString().padStart(3, "0")}</span>
                        {/* // id er et number men padStart() virker med string.. */}
                    </div>
                    <div className="flex justify-around items-center mt-[2em]">
                        {Number(pokemon.id) < 2 ? "": <svg onClick={handleLeftArrow} className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg> }

                        
                        <img src={pokemon.sprites.other["official-artwork"].front_default} alt="" className="size-[15em] " />

                        {Number(pokemon.id) > 1024 ? "" : <svg onClick={handleRightArrow} className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
}
                    </div>
                </div>
            </div>
            <main className="flex flex-col items-center rounded-[2em] bg-white pb-[5em] mt-[1em]">

                <ul className=" mt-[5em] flex justify-evenly items-center w-[10em]">
                    {pokemon.types.map((object) => (
                        <li className={`${colorBGType[object.type.name]} rounded-full px-2`}
                            key={object.type.name}
                        >
                            {object.type.name}
                        </li>
                    ))}
                </ul>
                <h2 className={"font-bold text-[1.2em] mt-[1em] " + colorType[primaryType]}>About </h2>

                <div className="flex justify-evenly w-[25em] mt-[2em]">
                    <div className="flex-col flex justify-start w-[5em] border-e-2">
                        <div className="flex justify-start items-center text-[.8em] text-grey">
                            <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M224 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm122.5 32c3.5-10 5.5-20.8 5.5-32c0-53-43-96-96-96s-96 43-96 96c0 11.2 1.9 22 5.5 32L120 128c-22 0-41.2 15-46.6 36.4l-72 288c-3.6 14.3-.4 29.5 8.7 41.2S33.2 512 48 512l416 0c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-72-288C433.2 143 414 128 392 128l-45.5 0z" /></svg>

                            <span className="pl-[1em]">{pokemon.weight / 10}kg</span>


                        </div>
                        <span className="text-[.8em] mt-[2em]">Weight</span>
                    </div>
                    <div className="flex-col flex justify-start w-[5em] border-e-2">
                        <div className="flex justify-start items-center text-[.8em] text-grey">
                            <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M0 48C0 21.5 21.5 0 48 0L208 0c26.5 0 48 21.5 48 48l0 48-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 64-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 64-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 64-80 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 48z" /></svg>
                            <span className="pl-[1em]">{pokemon.height}m</span>

                        </div>
                        <span className="text-[.8em] mt-[2em]">Height</span>
                    </div>
                    <div>
                        {pokemon.abilities.map(ability => (
                            <div key={ability.ability.name}>{ability.ability.name}</div>
                        ))}
                        <span className="text-[.8em] mt-[2em]">Moves</span>
                    </div>
                </div>


            </main>
        </>
    )
}