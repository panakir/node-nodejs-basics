import { cpus }from 'os'
import { Worker } from 'worker_threads';
import { FIBONACCI_START_NUMBER } from '../../helpers/constants.js';

const createWorker = ({file, data, resolve, reject}) => {
    return new Worker(file, { workerData: data })
    .on('message', resolve)
    .on('error', reject)
}

const performCalculations = async () => {
    const file = `${import.meta.dirname}/worker.js` 
    const workersAmount = cpus().length
   return Promise.all(new Array(workersAmount)
   .fill(0)
   .map((_ , index) => {
        const {resolve, reject,  promise } = Promise.withResolvers()
        createWorker({file, 
            data:FIBONACCI_START_NUMBER + index,
            resolve, 
            reject
         } )
        return promise
    })).then(res => {console.log(res)})

};

await performCalculations();