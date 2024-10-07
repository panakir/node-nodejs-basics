import {createWriteStream, createReadStream, rm} from 'fs';
import {createGzip} from 'zlib';
import {pipeline} from 'stream';
import path from 'path';
import {getFilePath} from '../../helpers/getFilePath.js';

const compress = async () => {
   const file = getFilePath('fileToCompress.txt', import.meta.url);
   const gzip = createGzip();
   const source = createReadStream(file);
   const target = createWriteStream(path.join(path.dirname(file), 'archive.gz'));

   pipeline(source, gzip, target, (error) => {
       if(error) throw new Error(error.message);
       rm(file, (error) => {
           if(error) throw new Error('File was not removed');
       });
   });
};

await compress();