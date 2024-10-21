'use client';
import Image from 'next/image';
import { useState } from 'react';
import Pokeball from "../../assets/images/Pokeball.svg";
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import SearchForm from './searchForm';


export default function Header(){
   
    const router = useRouter();
  
    return(
        <>
            <div className= "bg-[#DC0A2D] h-[8em] w-[100%] pl-[1em] m-[em] flex flex-col items-start justify-center">
                <Link href={"/"}>
                    <div className="flex h-[3em] w-[14em]  justify-between items-center mb-[1em]">
                        <Image
                            className="size-[2.5em]"
                            src={Pokeball}
                            alt="Picture of the author"
                        />
                        <h1 className="text-white text-[2.5em] font-bold">Pokédex</h1>
                    </div>
                </Link>
                <SearchForm />

            </div>
        </>
    )
}