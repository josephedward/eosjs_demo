const { reject } = require("bluebird");
const { Api, JsonRpc, RpcError } = require("eosjs");
const { JsSignatureProvider } = require("eosjs/dist/eosjs-jssig"); // development only
const fetch = require("node-fetch"); // node only; not needed in browsers
const { TextEncoder, TextDecoder } = require("util"); // node only; native TextEncoder/Decoder

const defaultPrivateKey = "5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr"; // bob
const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
const rpc = new JsonRpc("https://api.testnet.eos.io", { fetch });
//https://testnet.eos.io/block-list
// https://api.eosnewyork.io/v1/chain/get_info

(async()=>{
    try{
  let currentInfo = await rpc.get_info().then((response,reject)=>{
      console.log(response)
  })
  // .get_block(1) //get the first block
  console.log(currentInfo)}
  catch(error){
      console.log("ERROR: "+error)
  }
//   currentBlock = await rpc.get_block(currentInfo.head_block_num)
//   console.log(currentBlock)
//   currId= currentBlock.id
    })();
    // setInterval(logRpcGetInfo, 500)