import fs from 'fs';
import { getFilePath }  from '../../helpers/getFilePath.js';
import { FILE_NAME, FILE_MESSAGE, ERROR_MESSAGE } from '../../helpers/constants.js';

const create = async () => {
    const filePath = getFilePath(FILE_NAME, import.meta.url);

    fs.writeFile(filePath, FILE_MESSAGE, {flag: 'wx'}, (err) => {
        if(err) { throw new Error(ERROR_MESSAGE) }
    });
};

await create();