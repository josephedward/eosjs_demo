import React, { useState, useEffect, useRef, Fragment } from "react";
import ReactDOM from "react-dom";
import {
  ThemeProvider,
  createTheme,
  Arwes,
  Frame,
  Heading,
  Words,
  SoundsProvider,
  createSounds,
} from "arwes";
import Content from "arwes/lib/Content";
import ErrorBoundary from "./ErrorBoundary";
import Block from "./Block";
import { useTimer } from "use-timer";

const chalk = require("chalk");
const { Api, JsonRpc, RpcError } = require("eosjs");
const { JsSignatureProvider } = require("eosjs/dist/eosjs-jssig"); // development only
const fetch = require("node-fetch"); // node only; not needed in browsers
const { TextEncoder, TextDecoder } = require("util"); // node only; native TextEncoder/Decoder
const defaultPrivateKey = "5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr"; // bob
const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
let endPointUrl= "https://api.testnet.eos.io"
const rpc = new JsonRpc(endPointUrl, { fetch });
// https://api.eosnewyork.io/v1/chain/get_info
let currentInfo;
let currentBlock = {};
let tenMostRecentBlocks = [];
let reqTimer;


(async()=>{
  try {
    currentInfo = await rpc.get_info();
    console.log("currentInfo.head_block_num : ", currentInfo.head_block_num);
    currentBlock = await rpc.get_block(currentInfo.head_block_num);
    console.log("currentBlock : ", currentBlock);
    tenMostRecentBlocks = [];
    for (let x = 10; x > 0; x--) {
      let blockIndex = currentInfo.head_block_num - x;
      let tempBlock = await rpc.get_block(blockIndex);
      tenMostRecentBlocks.push(tempBlock);
    }
    console.log(tenMostRecentBlocks);
  } catch (error) {
    console.log(chalk.red("ERROR FETCHING CHAIN : ") + chalk.bgRed(error));
  }
  })();


function BlockList() {
  const { time, start, pause, reset, isRunning } = useTimer({
    initialTime: 10,
    timerType: "DECREMENTAL",
    onTimeUpdate: (time) => {
      console.log("Time is updated", time);
      reqTimer = time;
    },
    interval: 500,
  });


  

  
  const [count, setCount] = useState(0);
  useInterval(async () => {
    reset();
    start();
    try {
      currentInfo = await rpc.get_info();
      console.log("currentInfo.head_block_num : ", currentInfo.head_block_num);
      currentBlock = await rpc.get_block(currentInfo.head_block_num);
      console.log("currentBlock : ", currentBlock);
      tenMostRecentBlocks = [];
      for (let x = 10; x > 0; x--) {
        let blockIndex = currentInfo.head_block_num - x;
        let tempBlock = await rpc.get_block(blockIndex);
        tenMostRecentBlocks.push(tempBlock);
      }
      console.log(tenMostRecentBlocks);
    } catch (error) {
      console.log(chalk.red("ERROR FETCHING CHAIN : ") + chalk.bgRed(error));
    }
    setCount(count + 1);
  }, 5000);

  return (
    <ErrorBoundary>
      <Arwes background="/images/blocks.gif" pattern="/images/glow.png">
        {/* style={{...blockStyle}} */}
        <Heading node="h1" style={{ ...headerStyle }} layer="primary">
          EOS CHAIN NAVIGATOR
        </Heading>
        {isRunning?(<h4 style={{ ...timerStyle}}>
            new results in : {Math.ceil((reqTimer - 1)/2)}
          </h4>):""}
        <h4 style={{ ...endPointStyle}}>
          RPC-API-URL endpoint : {endPointUrl}
        </h4>

<div style={{...listStyle}}>
        {tenMostRecentBlocks.map((book) => (
          <Block currentBlock={book} />
        ))}
</div>
      </Arwes>
    </ErrorBoundary>
  );
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

export default BlockList;

const listStyle={
  marginTop:"10%"
}

const blockStyle = {
  margin: "20%",
};

const headerStyle = {
  position: "fixed",
  justifyContent: "center",
  background: "darkblue",
  textAlign: "center",
  top: "0",
  width: "100%",
  zIndex: "10",
  margin: "0 auto",
  border: "2px solid aqua",
};

const timerStyle = {
  position: "fixed",
  justifyContent: "center",
  background: "black",
  textAlign: "center",
  top: "6%",
  width: "50%",
  zIndex: "10",
  margin: "2px",
  marginTop:"3px",
  padding:"2px",
  border: "3px solid purple",
};

const endPointStyle = {
  position: "fixed",
  display:"flex",
  flexDirection:"row",
  justifyContent: "center",
  background: "black",
  textAlign: "center",
  top: "6%",
  right:"0",
  width: "50%",
  zIndex: "10",
  margin: "2px",
  marginTop:"3px",
  padding:"2px",
  border: "3px solid purple",
};

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

