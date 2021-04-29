import { batchExample } from "./batch-example.js";
import { transactionExample } from "./transaction-example.js";
import { remarkExample } from "./remark-example.js";
import { readBlockDetails } from "./read-block-details-example.js";


async function main(){

  // Select(uncomment) the example that you want to run. Comment out the rest. 

  // await transactionExample();

  // await remarkExample();

  // await readBlockDetails();

  // // do {
  // //   console.log('time is ' + Date().toString())
    await batchExample();
  // //   await sleep(6000);
  // // } while(true)

}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

await main();
process.exit(0)
