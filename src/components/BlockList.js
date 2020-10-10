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
const rpc = new JsonRpc("https://api.testnet.eos.io", { fetch });
// https://api.eosnewyork.io/v1/chain/get_info
let currentInfo;
let currentBlock = {};
let tenMostRecentBlocks = [];
let reqTimer;

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
            Fetching new results in : {Math.ceil((reqTimer - 1)/2)}
          </h4>):""}
        {tenMostRecentBlocks.map((book) => (
          <Block currentBlock={book} />
        ))}
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

const blockStyle = {
  // display: "flex",
  // flexDirection: "row",
  // lineHeight: 0,
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
  top: "0",
  width: "25%",
  zIndex: "10",
  margin: "2px",
  marginTop:"3px",
  padding:"2px",
  border: "3px solid purple",
};

// const sounds = {
//   shared: { volume: 1 },
//   players: {
//     information: { sound: { src: ["/sounds/information.mp3"] } },
//     ask: { sound: { src: ["/sounds/ask.mp3"] } },
//     warning: { sound: { src: ["/sounds/warning.mp3"] } },
//     error: { sound: { src: ["/sounds/error.mp3"] } },
//   },
// };

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

{
  /* <Frame animate={true} level={3} corners={4} layer="primary">
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
            <h5>schedule_version : </h5>{" "}
            <h6> {currentBlock.schedule_version}</h6>
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
            <h5>transactions : </h5> 

          </div>
          <div style={{ ...rowStyle }}>
            <h5>block_extensions : </h5>{" "}
            <h6> {currentBlock.block_extensions}</h6>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>id : </h5> <h6> {currentBlock.id}</h6>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>block_num : </h5> <h6> {currentBlock.block_num}</h6>
          </div>
          <div style={{ ...rowStyle }}>
            <h5>ref_block_prefix : </h5>{" "}
            <h6> {currentBlock.ref_block_prefix}</h6>
          </div>
        </Content>
      </Frame> */
}
