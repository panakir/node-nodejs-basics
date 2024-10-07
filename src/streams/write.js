import {stdin, stdout} from 'process';
import {appendFile} from 'fs';
import { getFilePath } from '../../helpers/getFilePath.js';
import { ERROR_MESSAGE } from '../../helpers/constants.js';

const write = async () => {
   const file = getFilePath('fileToWrite.txt', import.meta.url);
   stdout.write('For exit press "ctrl + c"! \n');
    stdin.on('data', (data) => {
        appendFile(file, data.toString(), (error) => {
            if(error) throw new Error(ERROR_MESSAGE);
        }); 
    })
    
};

await write();