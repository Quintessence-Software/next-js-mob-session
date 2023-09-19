'use client';
import { createContext, useState } from 'react';

export const GlobalContext = createContext<string>('');

export const GlobalContextProvider = ({children}: { children: React.ReactNode })=>{
    const [searchTerm,setSearchTerm] = useState<string>('');

    return(
        <GlobalContext.Provider value={[searchTerm, setSearchTerm]}>
            {children}
        </GlobalContext.Provider>
    )
}