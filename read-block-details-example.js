import chalk from 'chalk';
import { ApiPromise, WsProvider, Keyring } from "@polkadot/api";

const wsProvider = new WsProvider('wss://westend-rpc.polkadot.io'); // replace the port to 9933 for HTTP
// const wsProvider = new WsProvider('ws://127.0.0.1:9944'); // replace the port to 9933 for HTTP
const api = await ApiPromise.create({ provider: wsProvider });

const block_hash = '0xf423599fa7cabb680b19733b5ea0e9676ead737eb38c2bd5ceffcb50a0a950d4';
const DOT = 10**15;

export async function readBlockDetails(){

  const block = await api.rpc.chain.getBlock(block_hash);

  block.block.extrinsics.forEach(ext => {
    console.log("Call Index: ", ext.callIndex[0], ' ', ext.callIndex[1])
  });

}