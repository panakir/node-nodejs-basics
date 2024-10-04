import fs from 'fs';
import {stdout}  from 'process';
import { getFilePath } from '../../helpers/getFilePath.js';

const list = async () => {
    const path = getFilePath('', import.meta.url);
    const filesList = await fs.readdir(path, (error, files) => {
        if (error) throw new Error('FS operation failed');
        stdout.write(files.join('\n'));
    })
    return filesList
};

await list();