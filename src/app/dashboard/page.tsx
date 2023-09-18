import { promises as fs } from 'fs';

export default async function Dashboard () {
    const readJsonFile = async (fileName: string) => {
        const file = await fs.readFile(fileName, 'utf-8')
        return file;
    };
    const data = await readJsonFile('C:/Dev/sandbox/nextjs/next-test-app/src/data/StockValues.json')
    const dataCollection = JSON.parse(data);
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