import chalk from 'chalk';
import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";

// const wsProvider = new WsProvider('wss://westend-rpc.polkadot.io'); // replace the port to 9933 for HTTP
const wsProvider = new WsProvider('ws://127.0.0.1:9944'); // replace the port to 9933 for HTTP
const api = await ApiPromise.create({ provider: wsProvider });

const keyring = new Keyring({type: 'sr25519'});
const alice = keyring.addFromUri('//Alice');
const bob = keyring.addFromUri('//Bob');

const user_mnemonic = "kidney input victory purpose normal hood disagree false raise tobacco recycle raccoon"
const westend_test_user = keyring.addFromMnemonic(user_mnemonic);


const vault1_address = '5HHQYkjc6teSiam9MC2Yrcb6s7ccQiKkebuWii4woP4az5Sa';
const vault2_address = '5GeQHJqvToh23wGMfPfmhW8NjKXUcd4CvxZmyUJ9SmGmTMkG';

const DOT = 10**15;
const WESTEND_DOT = 10**12;

export async function batchExample(){
  console.log(chalk.green('Batch example in progress...'))

  let txs1 = [];
  let txs2 = [];

  /** 
   * Batch One
   */
  // Create a transaction.
  txs1.push( api.tx.balances.transfer(vault1_address, WESTEND_DOT) );
  // Create a remark.
  const remark_data1 = 'This is my remark ' + Math.random() + Date();
  // const remark_data11 = 'This is my remark ' + Math.random() + Date();
  txs1.push( api.tx.system.remark(remark_data1) )
  // txs1.push( api.tx.system.remark(remark_data11) )

 
  // /** 
  //  * Batch Two
  //  */
  // // Create a transaction.

  // txs2.push( api.tx.balances.transfer(vault1_address, DOT * 7) );
  // // Create a remark.
  // const remark_data2 = 'This is my remark ' + Math.random() + Date();
  // txs2.push( api.tx.system.remark(remark_data2) )


  // console.log(txs1);
  // console.log(txs2);

  /**
   * Send Batch One
   */
  let batch = api.tx.utility.batch(txs1);

  console.log(batch);

  // let result1 = await batch.signAndSend(alice);
  let result1 = await batch.signAndSend(alice);

  console.log(`result1 is ${result1}`)

  //  /**
  //  * Send Batch Two
  //  */
  // let result2 = await api.tx.utility
  //   .batch(txs2)
  //   .signAndSend(bob, ({status})=>{
  //     console.log(status)
  //     // if( status.isInBlock ){
  //     //   console.log(`included in block : ${status.asInBlock}`);
  //     // }
  //   });

  // console.log(`result is ${result2}`)

  return 0;
}