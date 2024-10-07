import {createGunzip} from 'zlib';
import {createReadStream, createWriteStream, rm} from 'fs';
import {pipeline} from 'stream';
import path from 'path';
import {getFilePath} from '../../helpers/getFilePath.js';


const decompress = async () => {
    const fileToDecompress = getFilePath('archive.gz', import.meta.url);
    const gzip = createGunzip();
    const source = createReadStream(fileToDecompress);
    const target = createWriteStream(path.join(path.dirname(fileToDecompress), 'fileToCompress.txt'));
    
    pipeline(source, gzip, target, (error) => {
        if(error) throw new Error(error.message);
        rm(fileToDecompress, (error) => {
            if(error) throw new Error('File was not removed');
        })
    });
};

await decompress();