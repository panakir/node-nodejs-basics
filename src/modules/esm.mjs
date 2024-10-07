import path  from 'path';
import fs from 'fs/promises';
import  { release, version } from 'os';
import  { createServer as createServerHttp } from 'http';
import './files/c.js';

const random = Math.random();

const filePath = random > 0.5 ? './files/a.json' : './files/b.json';

const  unknownObject = await fs.readFile(new URL(filePath, import.meta.url), 'utf-8').then((data) => JSON.parse(data));

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${import.meta.filename}`);
console.log(`Path to current directory is ${import.meta.dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export  {
    unknownObject,
    myServer,
};

