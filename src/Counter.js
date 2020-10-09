import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const { Api, JsonRpc, RpcError } = require('eosjs');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');      // development only
const fetch = require('node-fetch');                                    // node only; not needed in browsers
const { TextEncoder, TextDecoder } = require('util');                   // node only; native TextEncoder/Decoder

const defaultPrivateKey = "5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr"; // bob
const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
const rpc = new JsonRpc('http://127.0.0.1:8888', { fetch });



let currentInfo
//  = useState({});
let currentBlock={}
//  = useState({});
let currTimeStamp
let currId
// =useState('')


// async function logRpcGetInfo(){ 
//   currentInfo = await rpc.get_info()
//   // .get_block(1) //get the first block
//   console.log(currentInfo.head_block_num)
//   currentBlock = await rpc.get_block(currentInfo.head_block_num)
//   console.log(currentBlock)
//   currId= currentBlock.id
//     }
//     // )();

//     setInterval(logRpcGetInfo, 500)

function Counter() {
  const [count, setCount] = useState(0);

  useInterval(async () => {
  currentInfo = await rpc.get_info()
  console.log(currentInfo.head_block_num)
  currentBlock = await rpc.get_block(currentInfo.head_block_num)
  console.log(currentBlock)
  currTimeStamp= currentBlock.timestamp
  currId= currentBlock.id


    // Your custom logic here
    setCount(count + 1);
  }, 1000);

  return <ul>
  <li>{currentBlock.timestamp}</li>
  <li>{currentBlock.producer}</li>
  <li>{currentBlock.confirmed}</li>
  <li>{currentBlock.previous}</li>
  <li>{currentBlock.transaction_mroot}</li>
  <li>{currentBlock.action_mroot}</li>
  <li>{currentBlock.schedule_version}</li>
  <li>{currentBlock.new_producers}</li>
  <li>{currentBlock.header_extensions}</li>
  <li>{currentBlock.producer_signature}</li>
  <li>{currentBlock.transactions}</li>
  <li>{currentBlock.block_extensions}</li>
  <li>{currentBlock.id}</li>
  <li>{currentBlock.block_num}</li>
  <li>{currentBlock.ref_block_prefix}</li>
  </ul>;
}


/*
timestamp 
producer 
confirmed
previous
transaction_mroot
action_mroot
schedule_version
new_producers
header_extensions
producer_signature
transactions
block_extensions
id
block_num
ref_block_prefix
*/

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Counter;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Counter />, rootElement);
