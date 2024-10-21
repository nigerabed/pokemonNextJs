"use client"

import { filteredContext } from "@/context/filteredList";
import { useContext, useState } from "react";



export default function SearchForm(){

    const {state, setState} = useContext(filteredContext);
    // const [searchInput, setSearchInput] = useState("");

    function handler(event){
        const keyword = event.target.value
        setState(keyword)
    }

    function handleClick() {
        router.push('/' + searchInput)
    }
    return (
        <form action="searchResults" className="w-[23em] flex justify-between">
            <input type="search"
             name="search" 
             id="search" 
             value={state} 
             onChange={handler} 
             placeholder="Search"
             className="pl-[1em] shadow-inner-strong h-[2.5em] w-[20em] rounded-[1.5em] bg-[#FFFFFF]" />
            {/* <button onClick={handleClick} className="shadow-inner-strong h-[1.3em] w-[1.3em] bg-[#FFFFFF] rounded-full text-[2em] text-[red]">#</button> */}
        </form>
    )
}