import fs from 'fs';
import { getFilePath } from '../../helpers/getFilePath.js';

const remove = async () => {
    const pathToFile = getFilePath('fileToRemove.txt', import.meta.url);
    fs.unlink(pathToFile, (error) => {
        if (error) throw new Error('FS operation failed');
    })
};

await remove();