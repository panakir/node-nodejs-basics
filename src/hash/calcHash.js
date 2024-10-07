import { getFilePath } from "../../helpers/getFilePath.js";
import crypto from 'crypto';
import fs from 'fs';

const calculateHash = async () => {
    const file = getFilePath('fileToCalculateHashFor.txt', import.meta.url);
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(file);
    
    stream.on('data', (data) => hash.update(data));
    stream.on('end', () => {
        const fileHash = hash.digest('hex');
        process.stdout.write(`SHA256 hash for ${file} is ${fileHash}`);
    });  
};

await calculateHash();