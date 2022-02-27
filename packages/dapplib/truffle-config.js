require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture stove regret random update include private equal general'; 
let testAccounts = [
"0x24bdb1dd27196443fc92eb3fe7a99078cbd9ef13b7ed0a4060bdf1a98c51ffcf",
"0xd9bdd01c7c8da02b11975b45cb69a47b9c95971f07e9d75e4e13d908512519bf",
"0xff1c35b3ecc48412facd01d06104ae516552fddc5e99ff6974abac4ad6a0c2e6",
"0x439d951a6441cb2495f6292f9356a791aaf56fb6e43b4218b0cda707caaab851",
"0xa21686c24403d944ede95fe6f0e74452281e586017df651d3ec69f16fe8a3473",
"0xe532d61c9a12dcc6f7c9b207a623ddfb851a58be321ea81111f4acc74c8eb7fe",
"0x783ff8aad79835ee9e3ef85eb1b97af7c7a82afc2f901e76a1f4fd82e5fc2a21",
"0xe1183378ef74aa5dbb962d56fc220eb6f528881eb4277cf6f934727a156f5a99",
"0xa5115a1c41ce2510e6ebef981468bf096c7f2c155ba8701c3076a18f07549747",
"0x5fdcee52fa40020fb27e3c0d2cb766c424218c5cf38ef3a24924f51e8d5b942f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

