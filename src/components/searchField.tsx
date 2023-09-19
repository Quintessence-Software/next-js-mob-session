'use client'
import { searchFilter } from '@/sharedUtil/utils'
import { useState, useContext } from 'react'
import { GlobalContext } from '@/context/GlobalContext';

export default function SearchField() {
    const [ searchTerm, setSearchTerm ] = useState('');
    const searchTermContext = useContext(GlobalContext);
    console.log('searchTermContext: ' + searchTermContext)

    return (
        <>
            <GlobalContext.Provider value={searchTerm}>
                <label htmlFor= 'search-bar' className = "block" >
                    <span className="block text-sm font-medium text-slate-700" > Search </span>
                        <input
                        onChange = {(e)=>setSearchTerm(e.target.value)}
                        type = 'text' id = 'search-bar'
                        placeholder = 'input search query here'
                        className = "border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                </label>
            </GlobalContext.Provider>
        </>
    )
}