import { createContext } from 'react';

export const collectionContext = createContext([]);

export const searchFilter = (event: any) => {
    console.log('searchFilter: ', event.target.value);
};