require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone strong deny spike purse hundred light army gate'; 
let testAccounts = [
"0x6df4459b8f873e4728b1c1be9c06a970e087df4c9bb60a6e45944c1ce7cf2356",
"0x7bd5f49356f69b38d050a07f5bff8c3ba0bd5dd0ff9e7fd7688269a8b9736733",
"0xc4d424c41119e4f30ecbe09fb794a9b5a38e7e29de8d52ff77ea82db2b6e2b2f",
"0x14497875b755ea914263d239f1b7d525cde3d4a5bdc50416b03845cfa36de908",
"0x8ea49b73b71b0f9c8a2899d80b22d13dc586a461c93df94c472f8ec60bae48e6",
"0xdff5ef177f60295816e4a4fef40cc6357114a1b081017696b57b92ecb52020af",
"0x20741a30c246bbf37d2a4aa5675d75870de49e44412f245caf4a827a55d24bde",
"0xa795c7eaf7e8f7c284a92d54e5c249d4919b50bf386c40f1c77493e8049506cb",
"0xec16f4803aaa7814f2ae08ec306000eb58fd35f83c4d41ea130fd6ca3df4f288",
"0x00f787dfd9169364d477897dd96732aa735f2ac122b9adf150ce9c379f70398f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

