import {stdout} from 'process';

const parseArgs = () => {
    const args = process.argv.slice(2);
    let result = ''
    args.forEach((arg, index) => {
        if(arg.startsWith('--')) {
            result += `${arg} is ${args[index + 1]} \n`;
        }
    });
    stdout.write(result)
};

parseArgs();