import path from 'path';
import { fileURLToPath } from 'url';

export const getFilePath = (name, pathToFile) => {
    const fileName = fileURLToPath(pathToFile);
    const dirname  = path.resolve(path.dirname(fileName), 'files', name)
    return dirname
}

