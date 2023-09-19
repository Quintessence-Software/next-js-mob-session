'use client';
import { readJsonFile } from '@/sharedUtil/fileReader';
import { useEffect, useState } from 'react';

export default function Dashboard () {
    const [dataCollection,setDataCollection] = useState([{}]);

    useEffect(()=>{
        setDataCollection(readJsonFile())
    })

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