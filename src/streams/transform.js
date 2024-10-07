import {stdin, stdout} from 'process';
import {Transform} from 'stream';

const transform = async () => {

    const reverseTransform = new Transform({
        transform(chunk, _encoding, callback) {
            const reversedChunk = chunk.toString().split('').reverse().join('');
            callback(null, reversedChunk);
        }
    });
    stdout.write('For exit press "ctrl + c"! \n');
    stdout.write('Type your text here:  \n');
    stdin.pipe(reverseTransform).pipe(stdout);
};

await transform();