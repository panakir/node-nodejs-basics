import {createReadStream} from 'fs';
import {stdout} from 'process';
import { getFilePath } from '../../helpers/getFilePath.js';

const read = async () => {
  const file = getFilePath('fileToRead.txt', import.meta.url);

  const stream = createReadStream(file);

  stream.on('data', (data) => {
    stdout.write(data);
  });

  stream.on('end', () => {
    stdout.write('\n');
  });

}

await read();