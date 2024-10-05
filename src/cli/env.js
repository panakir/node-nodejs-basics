import { stdout } from 'process';

const parseEnv = () => {
    let result = '';
    const prefix = 'RSS_';
    const keys = Object.keys(process.env);

    keys.filter(key => key.startsWith(prefix)).forEach(key => {
       result += `${key}=${process.env[key]}\n`;
    });
    
    stdout.write(result);
};

parseEnv();