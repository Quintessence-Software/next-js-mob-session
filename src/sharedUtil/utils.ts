import * as fs  from 'fs';
import path from 'path';

export const searchFilter = (event: any) => {
    console.log('searchFilter: ', event.target.value);
};

// export const readJsonFile = (filePath: string) => {
//     return  fs.readFileSync(path.join(process.cwd(), filePath ));
// };