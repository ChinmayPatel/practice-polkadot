import chalk from 'chalk';
import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";

const wsProvider = new WsProvider('ws://127.0.0.1:9944'); // replace the port to 9933 for HTTP
const api = await ApiPromise.create({ provider: wsProvider });

const keyring = new Keyring({type: 'sr25519'});
const alice = keyring.addFromUri('//Alice');
const vault_address = '5HHQYkjc6teSiam9MC2Yrcb6s7ccQiKkebuWii4woP4az5Sa';

const DOT = 10**15;

export async function remarkExample(){
  console.log(chalk.green('Remark example in progress...'))

  // Create a Remark.
  const txHash = await api.tx.system
    .remark('This is my remark ')
    .signAndSend(alice)

    // .send();
    // .signAndSend()

  console.log(`Submitted with Exstrinsic Hash ${txHash}`);

}