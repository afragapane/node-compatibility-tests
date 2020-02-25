
import { NEOONEDataProvider } from '@neo-one/client-core';
import { hash256s } from './data';

const testRpcUrl = 'http://localhost:10332/rpc';

const testProvider = new NEOONEDataProvider({
    network: 'main',
    rpcURL: testRpcUrl,
  });

const runTests = async () => {
    // getBlockCount - good
    const blockCount = await testProvider.getBlockCount();
    console.log(`Block Count: ${blockCount}`);

    // getBestBlockHash - good
    const blockHash = await testProvider.getBestBlockHash();
    console.log(`Block Hash: ${blockHash}`)

    // getBlock(hash) - errors, block in different format
    // const blockA = await testProvider.getBlock(hash256s.a);
    // console.log(`Block: ${JSON.stringify(blockA)}`)

    // getBlock(index) - errors, block in different format
    // const blockA = await testProvider.getBlock(2300000);
    // console.log(`Block: ${JSON.stringify(blockA)}`)


}

runTests()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });