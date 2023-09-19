
import { promises as fs } from 'fs';
import { NextApiResponse, NextApiRequest } from 'next'



export const readJsonFile = async (filePath: string) => {
    return await fs.readFile(filePath, 'utf-8');
};

export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse<string>
  ) {
    const jsonFile = await readJsonFile('C:/Users/sizib/Desktop/Frameworks/next-js-mob-session/src/data/StockValues.json');
    return res.status(200).json(jsonFile)
  }