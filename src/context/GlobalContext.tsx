'use client';
import { createContext, useState } from 'react';

export const GlobalContext = createContext({});

// export const GlobalContextProvider = ({children}: { children: React.ReactNode })=>{
//     const [ searchTerm, setSearchTerm ] = useState<string>('');

//     return(
//         <GlobalContext.Provider value=''>
//             {children}
//         </GlobalContext.Provider>
//     )
// }