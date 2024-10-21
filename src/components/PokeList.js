"use client"

import Link from "next/link";
import Header from "./Header";
import { useContext } from "react";
import { filteredContext } from "@/context/filteredList";
import Image from "next/image";

export default function PokeList({ pokemon }) {

    const { state } = useContext(filteredContext);

    const filteredList = pokemon.filter(item => item.name.toLowerCase().includes(state))

    return (
        <>
            
                <ul className="flex-wrap flex justify-center items-center bg-[#efeded] h-[92vh] overflow-y-scroll">

                    {filteredList.map((pokemon) => (

                        <li key={pokemon.name} className="bg-[#EFEFEF] h-[8em] w-[6em] m-[1em] flex justify-center items-center rounded-[.5em] shadow-[0px_0px_5px_1px_#B3B3B3]">
                            <Link href={"/pokemon/" + pokemon.url.split("/").slice(-2)[0]}>
                                <span>#{pokemon.url.split("/").slice(-2)[0].padStart(3, "0")}</span>

                                <Image
                                    height={475}
                                    width={475}
                                    className="size-[5em]"
                                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.url.split("/").slice(-2)[0] + ".png"} alt={`image of ${pokemon.name}`} />
                                <p className="font-bold">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
                            </Link>


                        </li>
                    ))}
                </ul>


                {pokemon.length < 1 ? <p> no pokemon found</p> : ""}

            
        </>
    );
}