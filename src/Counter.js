import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme, Arwes } from "arwes";
import Content from "arwes/lib/Content";

const { Api, JsonRpc, RpcError } = require("eosjs");
const { JsSignatureProvider } = require("eosjs/dist/eosjs-jssig"); // development only
const fetch = require("node-fetch"); // node only; not needed in browsers
const { TextEncoder, TextDecoder } = require("util"); // node only; native TextEncoder/Decoder

const defaultPrivateKey = "5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr"; // bob
const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
const rpc = new JsonRpc("http://127.0.0.1:8888", { fetch });

let currentInfo;
let currentBlock = {};
//  = useState({});
//  = useState({});
// let currTimeStamp
// let currId
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
    currentInfo = await rpc.get_info();
    console.log(currentInfo.head_block_num);
    currentBlock = await rpc.get_block(currentInfo.head_block_num);
    console.log(currentBlock);
    setCount(count + 1);
  }, 1000);

  return (
    <Arwes background="/images/background.jpg" pattern="/images/glow.png">
      <Content style={{ margin: "5%" }}>
        <div style={{ ...rowStyle }}>
          <h5>timestamp : </h5>
          <h6> {currentBlock.timestamp}</h6>
        </div>
        <div style={{ ...rowStyle }}>
          <h5>producer : </h5> <h6> {currentBlock.producer}</h6>
        </div>
        <div style={{ ...rowStyle }}>
          <h5>confirmed : </h5> <h6> {currentBlock.confirmed}</h6>
        </div>
        <div style={{ ...rowStyle }}>
          <h5>previous : </h5> <h6> {currentBlock.previous}</h6>
        </div>
        <div style={{ ...rowStyle }}>
          <h5>transaction_mroot : </h5>{" "}
          <h6> {currentBlock.transaction_mroot}</h6>
        </div>
        <div style={{ ...rowStyle }}>
          <h5>action_mroot : </h5> <h6> {currentBlock.action_mroot}</h6>
        </div>
        <div style={{ ...rowStyle }}>
          <h5>schedule_version : </h5> <h6> {currentBlock.schedule_version}</h6>
        </div>
        <div style={{ ...rowStyle }}>
          <h5>new_producers : </h5> <h6> {currentBlock.new_producers}</h6>
        </div>
        <div style={{ ...rowStyle }}>
          <h5>header_extensions : </h5>{" "}
          <h6> {currentBlock.header_extensions}</h6>
        </div>
        <div style={{ ...rowStyle }}>
          <h5>producer_signature : </h5>{" "}
          <h6> {currentBlock.producer_signature}</h6>
        </div>
        <div style={{ ...rowStyle }}>
          <h5>transactions : </h5> <h6> {currentBlock.transactions}</h6>
        </div>
        <div style={{ ...rowStyle }}>
          <h5>block_extensions : </h5> <h6> {currentBlock.block_extensions}</h6>
        </div>
        <div style={{ ...rowStyle }}>
          <h5>id : </h5> <h6> {currentBlock.id}</h6>
        </div>
        <div style={{ ...rowStyle }}>
          <h5>block_num : </h5> <h6> {currentBlock.block_num}</h6>
        </div>
        <div style={{ ...rowStyle }}>
          <h5>ref_block_prefix : </h5> <h6> {currentBlock.ref_block_prefix}</h6>
        </div>
      </Content>
    </Arwes>
  );
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

const rowStyle = {
  display: "flex",
  flexDirection: "row",
  lineHeight: 0,
};
