import { ERROR_MESSAGE } from "../../helpers/constants.js";
import { getFilePath } from "../../helpers/getFilePath.js";
import fs from 'fs';

const copy = async () => {
    const fromPath = getFilePath('', import.meta.url);
    const toPath = `${fromPath}__copy`
    const options = {
        recursive: true,
        errorOnExist: true,
        force: false
    }
    fs.cp(fromPath, toPath, options, (error) => {
        if(error) throw new Error(ERROR_MESSAGE)
    })
}

await copy();
