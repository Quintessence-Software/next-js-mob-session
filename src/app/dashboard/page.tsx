"use client"

import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '@/context/GlobalContext';


export default function Dashboard () {
    const [dataCollection,setDataCollection] = useState([{}]);
    const searchTerm = useContext(GlobalContext);

    useEffect(()=>{
        fetch('http://localhost:3000/api/stocks').then(
            async (response) => setDataCollection(JSON.parse(await response.json()))
        );
    }, []);

    return (
        <>
            <h1>Dashboard</h1>
            <table className='overflow-y-hidden h-10'>
                <thead>
                    <tr>
                        <td>
                            Stock ID
                        </td>
                        <td>
                            Date
                        </td>
                        <td>
                            Value
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataCollection.map((item: any, index: number) => {
                            return (
                                <tr key={index}>
                                    <td>{item.stock_id}</td>
                                    <td>{item.date}</td>
                                    <td>{item.value}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}