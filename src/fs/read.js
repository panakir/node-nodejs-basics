import fs from 'fs';
import {stdout}  from 'process';
import { getFilePath } from '../../helpers/getFilePath.js';

const read = async () => {
    const path = getFilePath('fileToRead.txt', import.meta.url);
    fs.readFile(path, 'utf-8', (error, data) => {
        if (error) throw new Error('FS operation failed');
        stdout.write(data);
    })
};

await read();