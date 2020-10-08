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
let currentBlock
//  = useState({});
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
  currId= currentBlock.id

    // Your custom logic here
    setCount(count + 1);
  }, 1000);

  return <h1>{currId}</h1>;
}

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
