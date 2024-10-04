import fs from 'fs';
import { getFilePath } from '../../helpers/getFilePath.js';

const rename = async () => {
    const oldPath = getFilePath('wrongFilename.txt', import.meta.url);
    const newPath = getFilePath('properFilename.md', import.meta.url);
   fs.rename(newPath, oldPath, (error) => {
       if(error) throw new Error('FS operation failed');
   })
};

await rename();